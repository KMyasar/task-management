
# Task Management (MERN Stack)

A simple "To Do" application showcasing CRUD functionality built with the MERN stack.

## Features
- Add, view, update, and delete tasks.
- Persistent data storage with MongoDB.
- Backend API built with Express.js and Node.js.
- Responsive UI developed with React.js.

## Installation

 - Clone the repository:
   ```bash
   git clone https://github.com/KMyasar/task-management.git
 - Navigate to the project directory.
 - Install dependencies:
	- **Frontend**
	```bash
	#~/Project_dir/
	npx create-react-app my-app
	cd my-app
	npm install axios
	```
	 - **Backend**
	 ```bash
	 #~/Project_dir/
	 mkdir server
	 cd server
	 npm init -y
	 npm install express body-parser cors mongoose
	 ```
 - Configure environment variables:

   -  Create a  `.env`  file in the  `server`  directory with your MongoDB connection string and other necessary variables.
 
 - Run the application:

   - **Backend**
   ```bash
   #~/Project_dir/
   cd my-app
   npm start
   ```
   - **Frontend**
   ```bash
   #~/Project_dir/
   cd server
   node index.js
   ```
 - Open the application in your browser at `http://localhost:3000`.
  
  ## Tech Stack

-   **Frontend**: React.js
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Styling**: CSS
