import requests
import json

BASE = "http://127.0.0.1:5000/"

headers = {'accept': 'application/json'}
#response = requests.post(BASE + "/api/create", json = {"first_name":"John", "last_name":"Sander", "email":"abc@mail.com"})
#response = requests.put(BASE + "video/1", json={"likes":10, "name":"testname", "views":129})

response = requests.get(BASE) # + "acc/") #259555772"")

print(response.json())  