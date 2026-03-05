# GPT Chat Interface (React + Node.js)

This project is a simple ChatGPT-style interface built with **React** on the frontend and **Node.js + Express** on the backend.
It connects to the **OpenAI API** to generate AI responses based on user prompts.

The goal of this project is to demonstrate how to build a basic **full-stack AI application**, including API communication, state management, and UI rendering.

---

# Features

* Chat interface similar to ChatGPT
* React state management with `useState`
* Communication between frontend and backend using **Axios**
* Node.js backend with **Express**
* Integration with the **OpenAI API**
* Basic message formatting and chat log
* Modular component structure

---

# Project Structure

```
project-root
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── ChatMessage
│   │   │   └── SideMenu
│   │   ├── api
│   │   ├── styles
│   │   └── App.js
│
├── server
│   ├── src
│   │   ├── config
│   │   │   └── openai.js
│   │   ├── controllers
│   │   ├── routes
│   │   └── index.js
│
├── .env
└── README.md
```

---

# Installation

Clone the repository:

```
git clone https://github.com/yourusername/gpt-chat-interface.git
```

Navigate into the project:

```
cd gpt-chat-interface
```

---

# Install Dependencies

### Backend

```
cd server
npm install
```

### Frontend

```
cd ../client
npm install
```

---

# Environment Variables

Create a `.env` file in the **project root** and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
PORT=5555
```

---

# Running the Application

Start the backend server:

```
cd server
node src/index.js
```

The server will run on:

```
http://localhost:5555
```

Start the frontend:

```
cd client
npm start
```

The React app will run on:

```
http://localhost:3000
```

---

# How It Works

1. The user types a prompt in the chat input.
2. The frontend sends the prompt to the backend using **Axios**.
3. The backend calls the **OpenAI API**.
4. The response is returned to the frontend.
5. The chat log is updated with both the user message and the AI response.

---

# Technologies Used

Frontend

* React
* JavaScript
* Axios
* CSS

Backend

* Node.js
* Express
* OpenAI API

---

# Future Improvements

Some possible improvements for the project:

* Message streaming
* Chat history persistence
* Authentication system
* Better UI/UX design
* Markdown message support
* Loading indicators for AI responses

---

# License

This project is for educational purposes.
