from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from google.oauth2.credentials import Credentials
from mailers import qrcode
import base64
import os


# Define the scopes required for Gmail API access
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

# Load client secret file
client_secret_file = os.environ.get('GOOGLE_CLIENT_SECRET_PATH')

# Set up credentials and authorize the API
creds = None
token_path = 'mailers/token.json'

if os.path.exists(token_path):
    creds = Credentials.from_authorized_user_file(token_path, SCOPES)
if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    else:
        flow = InstalledAppFlow.from_client_secrets_file(client_secret_file, SCOPES)
        creds = flow.run_local_server(port=5001)
    # Save the credentials for the next run
    with open(token_path, 'w') as token:
        token.write(creds.to_json())

# Create a Gmail service
service = build('gmail', 'v1', credentials=creds)


def sendMail(data):
    global service

    # Create a multipart message object
    message = MIMEMultipart('alternative')
    message['to'] = data['email']
    message['from'] = "startupweekendjaipur2023@gmail.com"
    message['subject'] = "Thank you for registering for Startup Weekend Jaipur 2023!"

    # generate the qr.png file and send it to mail
    qr_file_name = None
    try:
        qr_file_name = qrcode.createQR(data['uuid'])
    except Exception:
        pass
    html = f"""
        <p> Congratulations {data['name']} on your successful registration for Startup Weekend Jaipur 2023!
            We are excited to have you join us at the event. Please find the attached QR code with this email.
            Kindly make sure to have the QR code scanned at the event entrance to gain entry. We look forward
            to seeing you there!
        </p>
        <img src="{os.environ.get("WEB_HOST")}/swj2023/file/QR/{qr_file_name}" 
             alt="If the QR code is not visible, please contact our support team, 
             whose contact information is provided at the bottom of this email.">
    """
    # Attach the HTML content to the email
    message.attach(MIMEText(html, 'html'))

    # Encode the message as base64 string
    raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode('utf-8')

    # send the message over gmail
    try:
        message = service.users().messages().send(userId="me", body={'raw': raw_message}).execute()
        # if mail sent successfully
        return message['id']
    except Exception:
        return None
