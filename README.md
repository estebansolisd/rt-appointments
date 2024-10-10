How to run this project
Requirements:

Docker version 20.10.22, build 3a2c30b
Npm 10.5.0
Node 20.12.0
First step You shoud have install Docker 

1. Run API & DB
1.1. copy .env.example to .env in `Root Folder` and in the `api` folder
1.2. docker-compose up

The API will be running on port 3000


2. Run the app

just go to /app folder and run npm install and run npm run dev


The app will be running on port 3001

If you want to run unit testing you can ran `npm run test` for both folders