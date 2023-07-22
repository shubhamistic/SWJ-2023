import mysql.connector
from os import environ


# connect to MySQL database
conn = mysql.connector.connect(
    host=environ.get('DB_HOST'),
    user=environ.get('DB_USER'),
    password=environ.get('DB_PASS'),
    database='swj2023'
)
cur = conn.cursor()
cur.execute('SET GLOBAL max_allowed_packet=67108864')


# function to check if email is unique or not
def emailIdExists(email):
    query = """
        SELECT COUNT(*)
        FROM records
        WHERE email = (%s)
        LIMIT 1;
    """
    cur.execute(query, (email,))
    result = cur.fetchone()
    email_exists = result[0] > 0
    return email_exists


# function to check if mobile number is unique or not
def mobileNumberExists(mobile_number):
    query = """
        SELECT COUNT(*)
        FROM records
        WHERE phone LIKE %s
    """
    cur.execute(query, (f"%{mobile_number}%",))
    result = cur.fetchone()
    mobile_exists = result[0] > 0
    return mobile_exists


# function to check if transaction ID is unique or not
def transactionIdExists(transaction_id):
    query = """
            SELECT COUNT(*)
            FROM records
            WHERE transactionId = (%s)
            LIMIT 1;
    """
    cur.execute(query, (transaction_id,))
    result = cur.fetchone()
    transaction_id_exists = result[0] > 0
    return transaction_id_exists


# function to store the participant record into the database
def createRecord(record):
    query = """
        INSERT INTO
        records (name, team, phone, email, workPlace, city, age, gender, transactionId)
        VALUES ((%s), (%s), (%s), (%s), (%s), (%s), (%s), (%s), (%s));
    """
    cur.execute(query, (
        record['name'],
        record['team'],
        record['phone'],
        record['email'],
        record['workPlace'],
        record['city'],
        record['age'],
        record['gender'],
        record['transactionId']
    ))
    conn.commit()

    # get the id of the record using email_id
    query = """
        SELECT id
        FROM records
        where email = (%s)
        LIMIT 1;
    """
    cur.execute(query, (record['email'],))
    result = cur.fetchone()
    return result[0]


def isPasswordCorrect(password, access):
    query = """
        SELECT COUNT(*)
        FROM auth
        where pass = (%s) and access = (%s)
        LIMIT 1;
    """
    cur.execute(query, (password, access))
    result = cur.fetchone()
    return result[0] > 0


# function to get the participant records from the database
def getRecords(password, access):
    if isPasswordCorrect(password, access=access):
        query = """
            SELECT *
            FROM records
            ORDER BY id;
        """
        cur.execute(query)
        records = cur.fetchall()

        return records

    return None


# function to get a participant data using its uuid
def getParticipantInfo(record_id):
    query = """
       SELECT id, name, phone, email
       FROM records
       where id = (%s)
       LIMIT 1;
    """
    cur.execute(query, (record_id,))

    participant_record = cur.fetchone()

    return participant_record


# function to set mail sent status to true and store mail id
def setMailSentToTrue(record_id, mail_id):
    # set mail status to delivered
    query = """
        UPDATE records
        SET mailStatus = true
        WHERE id = (%s);
    """
    cur.execute(query, (record_id,))

    # store mail id in database
    query = """
        INSERT INTO
        mail_records (record_id, mail_id)
        VALUES ((%s), (%s));
    """
    cur.execute(query, (record_id, mail_id))

    conn.commit()


def getPaymentStatus(record_id):
    query = """
       SELECT paymentStatus
       FROM records
       where id = (%s)
       LIMIT 1;
    """
    cur.execute(query, (record_id,))

    payment_status = cur.fetchone()

    return payment_status[0] if payment_status else None


def setPaymentStatus(record_id, status, password, access):
    if isPasswordCorrect(password, access=access):
        query = """
            UPDATE records
            SET paymentStatus = (%s)
            WHERE id = (%s);
        """
        cur.execute(query, (status, record_id))

        conn.commit()

        return True

    return None
