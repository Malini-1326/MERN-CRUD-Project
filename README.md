# MERN Stack CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack. This project allows users to create, view, update, and delete user records through a React frontend connected to a Node.js and Express.js backend with MongoDB.

## Features

- Create new users
- View all users
- View user details
- Update existing users
- Delete users
- REST API integration
- MongoDB database integration
- React-based frontend
- Responsive user interface
- Frontend and backend separated into different folders

## Technologies Used

### Frontend

- React.js
- JavaScript
- Axios
- React Bootstrap
- CSS
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Body Parser

## Project Structure

```text
MERN-CRUD-Project/
│
├── client/
│   ├── package.json
│   └── react-crud/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   │   ├── userList.jsx
│       │   │   └── userform.jsx
│       │   ├── App.jsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.jsx
│       ├── package.json
│       └── vite.config.js
│
├── server/
│   ├── controller/
│   │   └── userController.js
│   ├── model/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```
## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Malini-1326/MERN-CRUD-Project.git
```

### 2. Navigate to the Project

```bash
cd MERN-CRUD-Project
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

Then navigate to the React application:

```bash
cd react-crud
npm install
```

### 4. Install Backend Dependencies

Open a new terminal and run:

```bash
cd server
npm install
```

## Environment Variables

Create a `.env` file inside the `server` folder.

Add your MongoDB connection string and server port:

```env
MONGODB_URL=your_mongodb_connection_string
PORT=5000
```

Do not upload your `.env` file to GitHub.

## Running the Application

### Start the Backend

```bash
cd server
node index.js
```

### Start the Frontend

```bash
cd client/react-crud
npm run dev
```

The frontend will start using the Vite development server.

## Application Flow

```text
React Frontend
       ↓
     Axios
       ↓
Express.js REST API
       ↓
    Node.js
       ↓
   Mongoose
       ↓
    MongoDB
```

## Purpose

This project was developed to demonstrate full-stack web development using the MERN stack, including React frontend development, REST API integration, MongoDB database operations, and complete CRUD functionality.

## Author

**Malini S**

GitHub: https://github.com/Malini-1326
