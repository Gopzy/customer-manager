# Customer_Manager

How to install:

1. npm install or yarn: install all the dependencues
2. npx json-server customer.json : to start the hosted JSON file (which will act as get api)
3. npm run android : to start the android app
4. npm run ios: to start the iOS app

additional:

To run it on a physical device.

1.run the below command: to start the server (replace the ip with your localhost ip)

json-server --host 192.168.1.10 customer.json

2. change the get url in "customerSaga.tsx" file, (replace with your localhost ip as step one)

http://192.168.1.10:3000/customer

3.build the apk again and install it on the device.

4.Make sure both server and device are connected on the same network (eg: same Wifi/Network).
