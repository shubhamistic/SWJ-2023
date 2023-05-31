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
def isEmailUnique(email):
    query = """
        SELECT COUNT(*)
        FROM records
        WHERE p_email = (%s)
        LIMIT 1;
    """
    cur.execute(query, (email,))
    result = cur.fetchone()
    email_exists = result[0] > 0
    return email_exists


# function to check if mobile number is unique or not
def isMobileNumberUnique(mobile_number):
    query = """
        SELECT COUNT(*)
        FROM records
        WHERE p_mob_num LIKE %s
    """
    cur.execute(query, (f"%{mobile_number}%",))
    result = cur.fetchone()
    mobile_exists = result[0] > 0
    return mobile_exists


# function to check if transaction ID is unique or not
def isTransactionIdUnique(transaction_id):
    query = """
            SELECT COUNT(*)
            FROM records
            WHERE p_transaction_id = (%s)
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
        records (p_uuid, p_name, p_mob_num, p_email, p_workplace, p_city, p_age, p_gender, p_transaction_id)
        VALUES ((%s), (%s), (%s), (%s), (%s), (%s), (%s), (%s), (%s))
    """
    cur.execute(query, (
        record['p_uuid'],
        record['p_name'],
        record['p_mob_num'],
        record['p_email'],
        record['p_workplace'],
        record['p_city'],
        record['p_age'],
        record['p_gender'],
        record['p_transaction_id']
    ))
    conn.commit()


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
            FROM records;
        """
        cur.execute(query)
        records = cur.fetchall()
        return records
    return False


# function to get a participant data using its uuid
def getParticipantInfo(uuid):
    query = """
       SELECT p_uuid, p_name, p_mob_num, p_email
       FROM records
       where p_uuid = (%s)
       LIMIT 1;
    """
    cur.execute(query, (uuid,))
    participant_record = cur.fetchone()
    return participant_record
