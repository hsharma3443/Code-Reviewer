# 🚀 AI Code Reviewer

An intelligent **AI‑powered code reviewer** built with the **MERN stack**.  
It uses **Google Generative AI (Gemini 2.5 Flash)** in the backend to analyze code and return detailed feedback, and provides a rich editing/reviewing experience on the frontend.

---

## ✨ Features

✅ **AI‑Powered Code Analysis** – Powered by Gemini 2.5 Flash to give suggestions and improvements.  
✅ **Live Code Editor** – Built with `react-simple-code-editor` and `prismjs` for syntax highlighting.  
✅ **Markdown Rendering** – Review results are displayed beautifully using `react-markdown` and `rehype-highlight`.  
✅ **Responsive UI** – Styled with modern CSS, including GitHub Dark/Prism themes.  
✅ **Seamless MERN Integration** – Express backend, React frontend, and API communication via `axios`.

---

## 🏗️ Tech Stack

| Layer | Technology / Library |
|-------|----------------------|
| **Frontend** | React, Vite, PrismJS, react-simple-code-editor, react-markdown, rehype-highlight, axios |
| **Backend** | Node.js, Express.js, Google Generative AI (Gemini 2.5 Flash SDK) |
| **Database (if needed)** | (not integrated yet, but MongoDB can be plugged in easily) |

---

## 📂 Folder Structure

```plaintext
Code Review/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── assets/logo.png
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🧠 How It Works

1. You paste your code in the **editor** on the frontend.  
2. The code is sent to the backend via **axios**.  
3. Backend uses **Google Generative AI (Gemini 2.5 Flash)** to analyze and generate feedback.  
4. The response is rendered in a markdown view with syntax highlighting.
