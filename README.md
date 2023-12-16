# node-task-manager-api

The node-task-manager-api is a RESTful API built using Node.js and MongoDB ODM with Mongoose. It supports user authentication with email and password, image upload, email notifications, and task CRUD operations.

## Features

- User authentication with JWT and bcrypt
- Image upload with multer and sharp
- Email notifications with sendgrid
- Task CRUD operations with MongoDB and Mongoose
- Validation and error handling with express-validator and custom middleware
- Testing with jest and supertest

## Installation

To run this project locally, you need to have Node.js and MongoDB installed on your machine.

1. Clone this repository: `git clone https://github.com/yuvraj0028/node-task-manager-api.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory and add the following variables:

PORT=3000

MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api

JWT_SECRET=your_jwt_secret

SENDGRID_API_KEY=your_sendgrid_api_key

4. Start the server: `npm run dev`
5. Use Postman or any other API client to test the endpoints.

## Endpoints

The API has the following endpoints:

- POST /users: Create a new user
- POST /users/login: Login a user
- POST /users/logout: Logout a user
- POST /users/logoutAll: Logout a user from all devices
- GET /users/me: Get the profile of the current user
- PATCH /users/me: Update the profile of the current user
- DELETE /users/me: Delete the profile of the current user
- POST /users/me/avatar: Upload an avatar for the current user
- DELETE /users/me/avatar: Delete the avatar of the current user
- GET /users/:id/avatar: Get the avatar of a user by id
- POST /tasks: Create a new task for the current user
- GET /tasks: Get all the tasks of the current user
- GET /tasks/:id: Get a task by id
- PATCH /tasks/:id: Update a task by id
- DELETE /tasks/:id: Delete a task by id
