from flask import Blueprint, request, abort, render_template, send_file
from re import match
from os import remove, path
from datetime import datetime
import json
import uuid
import pandas as pd
from models import db_swj2023 as database
from mailers import mailer

# Create a swj2023 route
swj2023 = Blueprint('swj2023', __name__)

"""
ROUTES:
    /
    /admin
    /read
    /download
    /create
    /event/<uuid>
    /scan
    /create-client-qr
    /file/QR/<qr_file_name>
"""


# swj2023 index route
@swj2023.route('/')
def index():
    return {
        "message": "Welcome to Welcome to Startup Weekend Jaipur 2023!",
        "fulfilled": True
    }


# route to render the admin page
@swj2023.route('/admin')
def admin():
    return render_template("adminPanel.html")


# route to fetch records from the database
@swj2023.route('/read', methods=['GET'])
def read():
    password = request.args.get('password')
    data = database.getRecords(password, access="READ")
    if data:
        return {
            "message": "Read Request Successful!",
            "fulfilled": True,
            "data": data
        }
    else:
        abort(401, 'Error: Unauthorized, incorrect password!')


# route to download records in form of Excel
@swj2023.route('/download', methods=['GET'])
def download():
    password = request.args.get('password')
    data = database.getRecords(password, access="DOWNLOAD")
    if data:
        df = pd.DataFrame(data, columns=['Uuid', 'Name', 'Phone', 'Email', 'Workplace', 'City', 'Age', 'Gender',
                                         'Transaction ID', 'Mail Status', 'Time'])
        df = df.drop(['Time', 'Mail Status'], axis=1)
        current_datetime = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        excel_file = f"SWJ_{current_datetime}.xlsx"
        df.to_excel(excel_file, index=False)
        response = send_file(excel_file, as_attachment=True)
        remove(excel_file)  # delete the Excel file from the directory
        return response
    else:
        abort(401, 'Error: Unauthorized, incorrect password!')


# route to create a participant entry into the database
@swj2023.route('/create', methods=['POST'])
async def create():
    data = request.get_data().decode('utf-8')
    uuid_ = str(uuid.uuid4())
    name = json.loads(data)['name']
    phone = json.loads(data)['phone']
    email = json.loads(data)['email']
    work_place = json.loads(data)['workPlace']
    city = json.loads(data)['city']
    age = json.loads(data)['age']
    gender = json.loads(data)['gender']
    transaction_id = json.loads(data)['transactionId']

    # check if all the data parameters received or not
    if not (
        name and phone and
        email and work_place and
        city and age and
        gender and transaction_id
    ):
        # abort if some parameters are missing
        abort(400, 'Error: Missing required parameters!')
        return

    # check if email syntax is correct or not
    email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if not match(email_pattern, email):
        abort(422, 'Error: Email validation failed!')
        return

    # check if email, phone and transaction ID is unique or not
    if (
        database.isEmailUnique(email) or
        database.isMobileNumberUnique(phone) or
        database.isTransactionIdUnique(transaction_id)
    ):
        abort(409, 'Error: Conflict, ensure that email, mobile, and transaction ID are unique!')
        return

    # if everything goes fine then insert the record into the database
    record = {
        "uuid": uuid_,
        "name": name,
        "phone": phone,
        "email": email,
        "workPlace": work_place,
        "city": city,
        "age": age,
        "gender": gender,
        "transactionId": transaction_id
    }
    try:
        database.createRecord(record)

        # send the mail to the participant
        mail_response = mailer.sendMail(record)
        if mail_response:
            # set the mail status to delivered
            database.setMailSentToTrue(mail_response, uuid_)

        return {
            "message": "Data Successfully Inserted!",
            "fulfilled": True,
            "uuid": uuid_
        }
    except Exception as e:
        abort(500, 'Error: Database error!', e)


# route to get the participant detail using their uuid
@swj2023.route('/event/<uuid_>', methods=['GET'])
def event(uuid_):
    # return render_template('clientQR.html', uuid_=uuid_)
    data = database.getParticipantInfo(uuid_)
    if data:
        return {
            "message": "Data retrieved successfully!",
            "uuid": data[0],
            "name": data[1],
            "phone": data[2],
            "email": data[3],
            "fulfilled": True
        }
    else:
        abort(404, 'Error: Data not found!')


# route to render the scanner page
@swj2023.route('/scan')
def scan():
    password = request.args.get('password')
    if database.isPasswordCorrect(password, access="SCAN"):
        return render_template("QRScanner.html")
    else:
        abort(401, 'Error: Unauthorized, incorrect password!')


# route to render the client-qr page this page will create QR codes for clients
@swj2023.route('/create-client-qr')
def createClientQR():
    uuid_ = request.args.get('uuid')
    return render_template("clientQR.html", uuid_=uuid_)


# route to get the png file or qr code using participant's uuid
@swj2023.route('/file/QR/<qr_file_name>')
def returnQRFile(qr_file_name):
    file_path = f"./data/QRs/{qr_file_name}"
    if path.exists(file_path):
        return send_file(file_path, mimetype='image/png')
    else:
        abort(404, 'Error: Requested file not found!')
