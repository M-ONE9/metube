# import urllib3
# import requests
# import json

# http = urllib3.PoolManager()


# r = http.request('POST', 'http://127.0.0.1:8000/users/login', json={'email': 'email', 'pswd':'pswd'})
# print(r.status)
# print(r.data)


# import requests
# import json

# url = 'http://127.0.0.1:8000/users/items'
# myobj = {
#   "name": "string",
#   "description": "string",
#   "price": 0,
#   "tax": 0
# }
# x = requests.post(url, json = myobj)
# print(x.text)

import requests
import json

url = 'http://127.0.0.1:8000/users/login'
x = requests.get(url, params = {"email": "dsk@lobotus.com",'pswd':'123'})
print(x)


# if x is not None:
#     print(x)
# else:
#     print("data not found")



# requests.post(url, data={key: value}, json={key: value}, args)