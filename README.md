# Mini Message Board

A simple **message board web application** built using **Node.js, Express, and EJS**.
Users can view messages, add new messages, and open individual message pages.
Messages are persisted in **PostgreSQL**.

🌐 **Live Demo:**
https://mini-message-board-02gk.onrender.com/

---

## Features

* View all messages on the home page
* Add a new message using a form
* Open individual message pages
* Persistent storage with PostgreSQL
* Input validation for username and message text
* Server-side rendering using **EJS**
* Simple **dark UI theme (black with yellow accents)**

---

## Tech Stack

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **node-postgres (pg)**
* **dotenv**
* **EJS (Embedded JavaScript Templates)**
* **CSS**
* **Render** (deployment)

---

## Project Structure

```
mini-message-board
│
├── public/          # Static files (CSS)
├── db/              # Database pool and seed script
│   ├── pool.js
│   └── populatedb.js
├── routes/          # Express route handlers
│   └── index.js
│
├── views/           # EJS templates
│   ├── index.ejs
│   ├── form.ejs
│   └── message.ejs
│
├── app.js           # Main server file
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```
git clone https://github.com/stevenstank/mini-message-board.git
```

Move into the project directory:

```
cd mini-message-board
```

Install dependencies:

```
npm install
```

---

## Running the Project Locally

1. Create a root `.env` file and add your connection string:

```
DATABASE_URL=<your_render_database_url>
```

2. Install dependencies:

```
npm install
```

3. Create the table and seed sample rows:

```
npm run db:seed
```

4. Start the server:

```
npm start
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## Database Schema

The app uses a `messages` table:

* `id` - auto-increment primary key
* `text` - `TEXT NOT NULL`
* `username` - `VARCHAR(255) NOT NULL`
* `added` - `TIMESTAMP DEFAULT CURRENT_TIMESTAMP`

---

## Routes

| Route           | Method | Description                            |
| --------------- | ------ | -------------------------------------- |
| `/`             | GET    | Displays all messages                  |
| `/new`          | GET    | Shows the form to create a new message |
| `/new`          | POST   | Validates and inserts a new message    |
| `/message/:id`  | GET    | Displays details of a specific message |

---

## Deployment

This project is deployed on **Render**.

Build Command:

```
npm install
```

Start Command:

```
node app.js
```

The server listens using:

```
const PORT = process.env.PORT || 3000;
```

Database connection uses:

```
process.env.DATABASE_URL
```

Environment variables are loaded with:

```
require("dotenv").config()
```

SSL is enabled with:

```
ssl: { rejectUnauthorized: false }
```

### Render Environment Variable

In your Render service settings, set:

* `DATABASE_URL` = your Render PostgreSQL external connection string

---

## Notes

* Messages are stored in PostgreSQL in a `messages` table.
* Validation rejects empty or whitespace-only username/message values.
* The app works locally via `.env` and on Render via the Render dashboard environment variable.
* You can also seed with a direct URL argument:

```
node db/populatedb.js "postgresql://..."
```

---

⭐ Feel free to fork or improve the project.
