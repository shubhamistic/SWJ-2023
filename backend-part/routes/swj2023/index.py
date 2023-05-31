from flask import Blueprint, request, abort, render_template, send_file
from re import match
from os import remove
from datetime import datetime
import json
import uuid
import pandas as pd
from models.swj2023 import database


# Create a blueprint for /swj2023 route
swj2023_routes = Blueprint('swj2023', __name__)


@swj2023_routes.route('/')
def index():
    return {
        "message": "Welcome to SWJ 2023!",
        "fulfilled": True
    }


@swj2023_routes.route('/admin')
def admin():
    return render_template("adminPanel.html")


@swj2023_routes.route('/read', methods=['GET'])
def read():
    password = request.args.get('password')
    data = database.getRecords(password, access="ADMIN")
    if data:
        return {
            "message": "Read Request Successful!",
            "fulfilled": True,
            "data": data
        }
    else:
        abort(401, 'Error: Unauthorized, incorrect password!')


@swj2023_routes.route('/download', methods=['GET'])
def download():
    password = request.args.get('password')
    data = database.getRecords(password, access="DOWNLOAD")
    if data:
        df = pd.DataFrame(data, columns=['Uuid', 'Name', 'Phone', 'Email', 'Workplace', 'City', 'Age', 'Gender', 'Transaction ID', 'Time'])
        df = df.drop('Time', axis=1)
        current_datetime = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        excel_file = f"SWJ_{current_datetime}.xlsx"
        df.to_excel(excel_file, index=False)
        response = send_file(excel_file, as_attachment=True)
        remove(excel_file)  # delete the Excel file from the directory
        return response
    else:
        abort(401, 'Error: Unauthorized, incorrect password!')


@swj2023_routes.route('/create', methods=['POST'])
def create():
    data = request.get_data().decode('utf-8')
    p_uuid = str(uuid.uuid4())
    p_name = json.loads(data)['name']
    p_mob_num = json.loads(data)['mob_num']
    p_email = json.loads(data)['email']
    p_workplace = json.loads(data)['workplace']
    p_city = json.loads(data)['city']
    p_age = json.loads(data)['age']
    p_gender = json.loads(data)['gender']
    p_transaction_id = json.loads(data)['transaction_id']

    # check if all the data parameters received or not
    if not (p_name and p_mob_num and
            p_email and p_workplace and
            p_city and p_age and
            p_gender and p_transaction_id
    ):
        # abort if some parameters are missing
        abort(400, 'Error: Missing required parameters!')
        return

    # check if email syntax is correct or not
    email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if not match(email_pattern, p_email):
        abort(422, 'Error: Email validation failed!')
        return

    # check if email, phone and transaction ID is unique or not
    if (database.isEmailUnique(p_email) or
        database.isMobileNumberUnique(p_mob_num) or
        database.isTransactionIdUnique(p_transaction_id)
    ):
        abort(409, 'Error: Conflict, ensure that email, mobile, and transaction ID are unique!')
        return

    # if everything goes fine then insert the record into the database
    record = {
        "p_uuid": p_uuid,
        "p_name": p_name,
        "p_mob_num": p_mob_num,
        "p_email": p_email,
        "p_workplace": p_workplace,
        "p_city": p_city,
        "p_age": p_age,
        "p_gender": p_gender,
        "p_transaction_id": p_transaction_id
    }
    try:
        database.createRecord(record)
        return {
            "message": "Data Successfully Inserted!",
            "fulfilled": True,
            "uuid": p_uuid
        }
    except Exception:
        abort(500, 'Error: Database error!')


@swj2023_routes.route('/event/<uuid_>', methods=['GET'])
def event(uuid_):
    # return render_template('clientQR.html', uuid_=uuid_)
    data = database.getParticipantInfo(uuid_)
    if data:
        return {
            "message": "Data retrieved successfully!",
            "p_uuid": data[0],
            "p_name": data[1],
            "p_mob_num": data[2],
            "p_email": data[3],
            "fulfilled": True
        }
    else:
        abort(404, 'Error: Data not found!')


@swj2023_routes.route('/scan')
def scan():
    password = request.args.get('password')
    if database.isPasswordCorrect(password, access="SCAN"):
        return render_template("QRScanner.html")
    else:
        abort(401, 'Error: Unauthorized, incorrect password!')
