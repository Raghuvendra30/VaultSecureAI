# 💼 VaultSecure AI – Financial Fraud Detection Web App (MERN Stack)

VaultSecure AI is a full-stack MERN application designed to detect and prevent financial fraud. It offers two key tools for organizations:

- 🛡️ **Anomaly Checker**: Flags transactions that deviate from a user's typical spending behavior.
- 💰 **Loan Fraud Assessor**: Evaluates the fraud risk of loan applications based on known fraud patterns.

---

## 📁 Project Structure

financial-fraud/
│
├── frontend/ # ReactJS frontend (user interface)
├── backend/ # ExpressJS backend (API, auth, fraud logic)
└── README.md # Project documentation

## 🚀 Features

- 🔐 User Authentication (Signup & Login)
- 🧠 Anomaly detection interface
- 📊 Loan fraud risk assessment
- 🧭 Dashboard with tool selection
- 🧾 Toast notifications for user feedback
- 🔓 Logout with back-button protection

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, React Router, React Toastify
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Icons**: React Icons (FontAwesome Premium-like)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/kritikapanjanani/VaultSecureAI


2️⃣ Install Dependencies

Backend:
cd backend
npm install

Frontend:
cd ../frontend
npm install

3️⃣ Environment Variables
Create a .env file in the backend folder with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4️⃣ Run the App

Backend:
cd backend
npx nodemon server.js

Frontend (in another terminal):
cd frontend
npm run dev
Frontend runs on: http://localhost:5173
Backend runs on: http://localhost:5000

🧪 Usage
Sign up or log in from the landing page.
Access the dashboard.
Choose either:
Anomaly Checker
Loan Fraud Assessor
Analyze behavior or assess loan risk.
Log out using the navbar button.

🛡️ Security & UX Enhancements
✅ useNavigate(..., { replace: true }) to prevent back-button navigation to login/signup.

✅ window.confirm() on logout & back navigation to confirm exit.

✅ Conditional Navbar for authenticated pages.

