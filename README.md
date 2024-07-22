# Online Banking Application
### Table of Contents
Introduction
Features
Technologies Used
Setup and Installation
Usage
Contributing
License
Contact

### Introduction
This is a full-stack online banking application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to manage their bank accounts, perform transactions, view transaction history, and more. It is designed to provide a secure, user-friendly, and efficient banking experience.

### Features
User authentication and authorization (registration, login, and logout)
Account management (view balance, account details)
Perform transactions (transfer money, pay bills)
View transaction history
Secure password storage and authentication using JWT
Responsive design for mobile and desktop use

### Technologies Used
Frontend:

React.js
Redux for state management
Axios for API requests
Bootstrap for styling
Backend:

Node.js
Express.js
MongoDB for database
Mongoose for MongoDB object modeling
JSON Web Tokens (JWT) for authentication
Setup and Installation
Prerequisites
Ensure you have the following installed on your system:

Node.js
MongoDB
Installation
### Clone the repository:

sh
git clone https://github.com/yourusername/online-banking-app.git
cd online-banking-app
Install server dependencies:

Copy code
cd server
npm install
Install client dependencies:

sh
cd ../client
npm install
Create a .env file in the server directory with the following contents:

env
Copy code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Start the MongoDB server:
sh
mongod

Run the server:
sh
cd ../server
npm start

Run the client:
sh
Copy code
cd ../client
npm start

### Usage
Open your browser and navigate to http://localhost:3000
Register a new account or log in with an existing account
Manage your bank account, perform transactions, and view your transaction history

### Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/your-feature)
Open a pull request
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions, feel free to reach out:

Email: chaudharyanushka010@gmail.com
GitHub: anushkaa-10
