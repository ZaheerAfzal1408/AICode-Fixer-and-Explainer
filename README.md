# AI Code Fixer and Explainer 🤖💻

An intelligent, full-stack web application that leverages the power of Google's **Gemini 2.5 Pro** AI model to automatically analyze, debug, and explain programming code in simple terms. 

Whether you're stuck on a tricky bug or trying to understand a complex piece of code, this tool acts as your personal AI coding assistant.

## ✨ Features
- **Bug Fixer**: Paste your broken code, specify the language, and get instantly corrected, runnable code.
- **Code Explainer**: Input any code block and receive a clear, step-by-step breakdown of how it works in plain English.
- **Multi-Language Support**: Works seamlessly across various programming languages.
- **Modern UI**: Clean, responsive frontend built with React and Vite.

## 🛠️ Tech Stack
**Frontend:**
- React 19 (via Vite)
- React Router DOM
- CSS3

**Backend:**
- Node.js & Express.js
- Google Generative AI (Gemini 2.5 Pro)
- CORS & dotenv

---

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites
- Node.js installed (v18+ recommended)
- A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### 1. Clone the Repository
```bash
git clone https://github.com/ZaheerAfzal1408/AICode-Fixer-and-Explainer.git
cd AICode-Fixer-and-Explainer
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   PORT=8080
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
   *The server will run on http://localhost:8080.*

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will be accessible at http://localhost:5173.*

---

## 📡 API Reference

The backend exposes the following REST endpoints:

### `POST /api/fix`
Fixes bugs in the provided code.
- **Payload:** `{ "code": "print('hello)", "language": "Python" }`
- **Response:** `{ "fixedCode": "print('hello')" }`

### `POST /api/explain`
Explains the provided code step by step.
- **Payload:** `{ "code": "def add(a, b): return a + b", "language": "Python" }`
- **Response:** `{ "explanation": "This is a Python function named `add`..." }`

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License
This project is open-source and available under the ISC License.
