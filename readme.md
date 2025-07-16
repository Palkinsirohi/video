# YouTube Backend API

## Project Overview
This project is a backend API for a video platform, providing user registration and media upload functionality. It is built using Node.js and Express, with MongoDB as the database. Users can register with profile and cover images, which are uploaded to Cloudinary.

## Technologies and Concepts Used

- **Express.js**: Web framework for building the API server and routing.
- **MongoDB with Mongoose**: Database and schema modeling for users and videos.
- **JWT (jsonwebtoken)**: For generating access and refresh tokens for authentication.
- **bcrypt**: For hashing user passwords securely.
- **Cloudinary**: Cloud media storage service used for uploading and hosting user avatars and cover images.
- **multer**: Middleware for handling multipart/form-data, used for file uploads.
- **Async error handling middleware**: Custom middleware to handle asynchronous errors gracefully.
- **Custom ApiError and ApiResponse classes**: For consistent error handling and API responses.

## File Structure Explanation

- `src/app.js`: Sets up the Express application, middleware (CORS, JSON parsing, cookie parsing), static file serving, and routes.
- `src/index.js`: Entry point of the application. Loads environment variables, connects to MongoDB, and starts the Express server.
- `src/constants.js`: Contains project-wide constants such as database name.
- `src/controllers/`: Contains business logic for API endpoints.
  - `user.controller.js`: Handles user registration, including validation, image uploads, and user creation.
- `src/models/`: Mongoose schemas and models.
  - `user.model.js`: Defines the User schema with fields like username, email, password, avatar, and JWT token methods.
  - `video.model.js`: Defines the Video schema with fields like video file, thumbnail, title, description, and owner reference.
- `src/routes/`: Defines Express routes.
  - `user.routes.js`: Defines user-related routes such as registration, using multer middleware for file uploads.
- `src/middlewares/`: Custom middleware.
  - `multer.middleware.js`: Configures multer for storing uploaded files temporarily on disk.
- `src/utils/`: Utility classes and functions.
  - `ApiError.js`: Custom error class for API errors.
  - `ApiResponse.js`: Standardized API response class.
  - `asyncHandler.js`: Wrapper to handle async errors in Express routes.
  - `cloudinary.js`: Cloudinary configuration and helper function to upload files.

## How to Run

1. Create a `.env` file in the root directory and set the following environment variables:
   - `PORT` - Port number for the server (e.g., 8000)
   - `CORS_ORIGIN` - Allowed origin for CORS
   - `MONGODB_URI` - MongoDB connection string
   - `ACCESS_TOKEN_SECRET` - Secret key for JWT access tokens
   - `ACCESS_TOKEN_EXPIRY` - Expiry time for access tokens (e.g., "15m")
   - `REFRESH_TOKEN_SECRET` - Secret key for JWT refresh tokens
   - `REFRESH_TOKEN_EXPIRY` - Expiry time for refresh tokens (e.g., "7d")
   - `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
   - `CLOUDINARY_API_KEY` - Cloudinary API key
   - `CLOUDINARY_API_SECRET` - Cloudinary API secret

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node src/index.js
   ```

The server will start and listen on the specified port, connecting to the MongoDB database and ready to handle API requests.

---

This README provides an overview of the backend API, the main technologies and concepts used, the file structure, and instructions to run the project.
