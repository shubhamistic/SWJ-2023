from flask import Blueprint, request, render_template
from controllers import swj2023_controller


# create swj2023 route
swj2023 = Blueprint('swj2023', __name__)


@swj2023.route('/admin', methods=['GET'])
def admin():
    return render_template("adminPanel.html")


@swj2023.route('/verify', methods=['GET'])
def verify():
    return render_template("verificationPanel.html")


@swj2023.route('/ticket', methods=['GET'])
def ticket():
    return render_template("ticketPanel.html")


@swj2023.route('/read-records', methods=['GET'])
def readRecords():
    return swj2023_controller.handle_read_records(request.args)


@swj2023.route('/download-records', methods=['GET'])
def downloadRecords():
    return swj2023_controller.handle_download_records(request.args)


@swj2023.route('/file/Tss/<transaction_id>', methods=['GET'])
def returnTransactionSSFile(transaction_id):
    return swj2023_controller.handle_transaction_ss(transaction_id)


@swj2023.route('/create-record', methods=['POST'])
def createRecord():
    return swj2023_controller.handle_create_record(request.get_json())


@swj2023.route('/toggle-payment-status', methods=['POST'])
def togglePaymentStatus():
    return swj2023_controller.handle_toggle_payment_status(request.args, request.form)


@swj2023.route('/upload-tss', methods=['POST'])
def uploadTSS():
    return swj2023_controller.handle_upload_transaction_ss(request.files)
