# 🎬 Movie App

A full-stack Movie App built with **React.js** (frontend) and **Node.js/Express** (backend), featuring movie search, trending list, and more.

## 🚀 Features

- 🔍 Search for movies using the TMDB API
- 📈 View trending movies 
- 🎨 Responsive and adaptive modern UI
- ⚛️ React + Redux for state management
- 🌐 Axios for HTTP requests
- 🔧 Express server to proxy API requests

---

## 🧰 Tech Stack

- **Frontend**: React.js, Redux, Axios, React Router
- **Backend**: Node.js, Express
- **API**: TMDB (The Movie Database)


## Prerequisites

To run this application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/mariamasrian/movie-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-app
   ```

3. Install the required dependencies:

   ```bash
   cd backend
   npm install
   cd client
   npm install
   ```

4. Create a `.env` file in the backend directory and add the following environment variables:
   Replace your port and your_tmdb_api_key with your actual TMDB API key.

   Note: You can choose a different port number if port is already in use.
   
5. Create a `.env` file in the client directory and add the following environment variables:
   Replace your_tmdb_api_key with your actual TMDB API key.


## Usage

1. Start the server by running the following command:

   ```bash
   cd backend
   npm run dev
   ```

   This will start the server and display a message indicating that the application has started.

2. Start the client by running the following command:

   ```bash
   cd client
   npm run dev
   ```

3. open browser's link in terminal

4. Enjoy!