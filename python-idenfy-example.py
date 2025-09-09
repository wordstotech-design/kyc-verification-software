import requests

API_KEY = 'YOUR_IDENFY_API_KEY'
url = "https://ivs.idenfy.com/api/v2/identification"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "clientUserId": "user_001"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
