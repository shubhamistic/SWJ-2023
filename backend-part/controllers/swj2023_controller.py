from flask import abort, send_file
from datetime import datetime
from re import match
from os import path
import pandas as pd

from models import db_swj2023 as database
from mailers import mailer


def handle_read_records(args):
    password = args.get('password')

    if password:
        data = database.getRecords(password, access="READ")

        if data:
            return data

    abort(401, 'Error: Unauthorized, incorrect password!')


def handle_download_records(args):
    password = args.get('password')

    if password:
        data = database.getRecords(password, access="DOWNLOAD")

        if data:
            df = pd.DataFrame(data, columns=['Sr. No.', 'Name', 'Team', 'Phone', 'Email', 'Workplace', 'City', 'Age', 'Gender',
                                             'Transaction ID', 'Mail Status', 'Time'])
            df = df.drop(['Time', 'Mail Status'], axis=1)
            current_datetime = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
            excel_file_path = f"./data/xlsx/SWJ_{current_datetime}.xlsx"
            df.to_excel(excel_file_path, index=False)
            return send_file(excel_file_path, as_attachment=True)

    abort(401, 'Error: Unauthorized, incorrect password!')


def handle_create_record(data):
    name = data.get('name')
    team = data.get('team')
    phone = data.get('phone')
    email = data.get('email')
    work_place = data.get('workPlace')
    city = data.get('city')
    age = data.get('age')
    gender = data.get('gender')
    transaction_id = data.get('transactionId')

    # STEP 1 - DATA VALIDATION
    # check if all the data parameters received or not
    if not (
        name and team and phone and
        email and work_place and
        city and age and
        gender and transaction_id
    ):
        abort(400, 'Error: Missing required parameters!')
        return

    # function to check if email syntax is correct or not
    def isMailSyntaxCorrect():
        email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        return match(email_pattern, email)

    if not isMailSyntaxCorrect():
        abort(422, 'Error: Email validation failed!')
        return

    # check if email, phone and transaction ID is unique or not
    if (
            database.emailIdExists(email) or
            database.mobileNumberExists(phone) or
            database.transactionIdExists(transaction_id)
    ):
        abort(409, 'Error: Conflict, ensure that email, mobile, and transaction ID are unique!')
        return

    # STEP 2 - DATA INSERTION
    # if everything goes fine then insert the record into the database
    record = {
        "name": name,
        "team": team,
        "phone": phone,
        "email": email,
        "workPlace": work_place,
        "city": city,
        "age": age,
        "gender": gender,
        "transactionId": transaction_id
    }
    try:
        participant_id = database.createRecord(record)

        # send the mail to the participant
        mail_id = mailer.sendMail(record)

        if mail_id:
            # set the mail status to delivered
            database.setMailSentToTrue(participant_id, mail_id)

        return {
            "message": "Data Successfully Inserted!",
            "fulfilled": True,
            "id": participant_id
        }

    except Exception as e:
        abort(500, 'Error: Database error!', e)


def handle_transaction_ss(transaction_id):
    ss_file_path = f"./data/TransactionSS/tss_{transaction_id}.png"

    if path.exists(ss_file_path):
        return send_file(ss_file_path)

    abort(404, 'Error: Requested file not found!')


def handle_upload_transaction_ss(files):
    if 'image' in files:
        file = files['image']

        if file:
            file.save(f'./data/TransactionSS/tss_{file.filename}.png')

            return {
                "message": "Transaction SS Successfully Uploaded!",
                "fulfilled": True
            }

    abort(400, 'Error: No file part!')


def handle_toggle_payment_status(args, form):
    password = form.get('password')

    if password:
        record_id = args.get('id')

        # get current payment status
        payment_status = database.getPaymentStatus(record_id)

        status = False if payment_status else True

        response = database.setPaymentStatus(record_id, status, password, access='UPDATE')

        if response:
            return {
                "message": "Request Successful!",
                "status": status
            }

    abort(401, 'Error: Unauthorized, incorrect password!')
