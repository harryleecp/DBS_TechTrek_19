import requests
import json

BASE  = "http://127.0.0.1:8000/"

response = requests.post(BASE + '/account/1')
response_dict = json.loads(response.text)

for i in response_dict:
    print(i)