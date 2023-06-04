from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from os import environ, path
import time


# Set the path to the Chrome webdriver executable
webdriver_path = environ.get("WEBDRIVER_PATH")

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
prefs = {
    'download.default_directory': './data/swj2023/QRs/',
    'download.prompt_for_download': False,
    'download.directory_upgrade': True,
    'safebrowsing.enabled': False
}
chrome_options.add_experimental_option('prefs', prefs)

# Create a ChromeDriver service object
service = Service(webdriver_path)

# Instantiate the Chrome webdriver with the service and options
driver = webdriver.Chrome(service=service, options=chrome_options)


def createQR(uuid):
    global driver

    # Load the HTML file (it will download the qr.png file)
    driver.get(f'http://127.0.0.1:5000/swj2023/create-client-qr?uuid={uuid}')

    png_file_name = f'qr_{uuid}.png'
    png_file_path = f"./data/swj2023/QRs/{png_file_name}"

    # wait for at most 5 seconds for the file to get downloaded else return error.png file
    start_time = time.time()
    while time.time() - start_time < 5:
        if path.exists(png_file_path):
            return png_file_name
        time.sleep(0.2)

    return 'error.png'
