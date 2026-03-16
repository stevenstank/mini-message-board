# Mini Message Board

A simple **message board web application** built using **Node.js, Express, and EJS**.
Users can view messages, add new messages, and open individual message pages.

🌐 **Live Demo:**
https://mini-message-board-02gk.onrender.com/

---

## Features

* View all messages on the home page
* Add a new message using a form
* Open individual message pages
* Server-side rendering using **EJS**
* Simple **dark UI theme (black with yellow accents)**

---

## Tech Stack

* **Node.js**
* **Express.js**
* **EJS (Embedded JavaScript Templates)**
* **CSS**
* **Render** (deployment)

---

## Project Structure

```
mini-message-board
│
├── public/          # Static files (CSS)
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

Start the server:

```
node app.js
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## Routes

| Route           | Method | Description                            |
| --------------- | ------ | -------------------------------------- |
| `/`             | GET    | Displays all messages                  |
| `/new`          | GET    | Shows the form to create a new message |
| `/new`          | POST   | Adds a new message                     |
| `/messages/:id` | GET    | Displays details of a specific message |

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

---

## Notes

* Messages are stored in an **in-memory array**, so they reset when the server restarts.
* This project was built to practice **Express routing, EJS templating, and form handling**.

---

⭐ Feel free to fork or improve the project.
