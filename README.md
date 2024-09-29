URL Shortener Service

This is a URL Shortener service built with React.js for the frontend and Node.js, Express.js, and MongoDB for the backend. The service allows users to input a long URL, get a shortened version, and redirects the user to the original URL when the short URL is visited.

Features

Shorten URLs: Input long URLs and get shortened, unique URLs.

Redirect to Original URL: Short URLs will redirect to the corresponding long URL.

MongoDB Integration: Stores original URLs, short URLs, and unique short codes in the database.


Tech Stack

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB (using Mongoose)

Unique Code Generation: nanoid (for generating short URL codes)




Installation and Setup

Prerequisites

Make sure you have the following installed on your machine:

Node.js

MongoDB Atlas account or local MongoDB setup

Git (to clone the repository)


Backend Setup

1. Clone the repository:

git clone <your-repo-url>
cd url-shortener


2. Install backend dependencies:

npm install


3. Set up environment variables:

Create a .env file in the root directory and add the following:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<databaseName>?retryWrites=true&w=majority
PORT=5000
BASE_URL=http://localhost:5000

Replace <username>, <password>, and <databaseName> with your MongoDB Atlas credentials.



4. Run the backend:

node index.js

The backend will now run on http://localhost:5000.



Frontend Setup

1. Navigate to the frontend folder:

cd frontend


2. Install frontend dependencies:

npm install


3. Start the frontend:

npm start

The frontend will run on http://localhost:3000.




---

API Endpoints

1. POST /api/url/shorten

This endpoint is used to shorten a long URL.

Request Body:

{
    "longUrl": "https://www.example.com"
}

Response:

{
    "shortUrl": "http://localhost:5000/abc123"
}


2. GET /:code

This endpoint is used to redirect the short URL to the original long URL.

Example:

Visiting http://localhost:5000/abc123 will redirect you to https://www.example.com.


