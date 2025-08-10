# 🎬 YouTube Clone (MERN Stack)

A full-stack YouTube-style video-sharing application built using **MongoDB**, **Express**, **React**, and **Node.js**.  
This project replicates core YouTube features — user authentication, channel creation, video uploads, likes/dislikes, comments, and responsive design.

---

## ✨ Features
- **User Authentication** – Register/Login with JWT
- **Channel Management** – Create, customize, and manage channels
- **Video Upload** – Title, description, thumbnail, category
- **Video Player** – Watch videos, view channel info, like/dislike
- **Comments** – Add, edit, and delete comments
- **Search & Filter** – Search videos by title, filter by category
- **Responsive UI** – Mobile, tablet, and desktop support
- **Sidebar & Header** – Collapsible sidebar, search bar, and user menu
- **Up Next Section** – Recommended videos
- **Lazy Loading** – Faster load times
- **Custom Loading Screen** – YouTube-style animation
- **Date Formatting** – Using `date-fns`

---

## 🛠️ Tech Stack
| Layer        | Tech Used |
|--------------|-----------|
| **Frontend** | React 19, React Router v7, Axios, Vite |
| **Backend**  | Node.js, Express 5, MongoDB, Mongoose |
| **Auth**     | JWT, bcrypt |
| **Styling**  | Tailwind CSS / Custom CSS |
| **Utils**    | date-fns |

---

## 📂 Project Structure
youtube-clone-mern/
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── seed/
│ │ └── seed.js
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── contexts/
│ │ ├── css/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── vite.config.js
└── README.md


---

## ⚡ Getting Started

### 📌 Prerequisites
- Node.js v18+
- MongoDB (Local or Atlas)
- npm or yarn

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/NikhilYadava0/youtube-clone-mern.git
cd youtube-clone-mern

2️⃣ Backend Setup
cd backend
npm install
Create a .env file in /backend:

env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
PORT=5100

(📌 Optional) Seed the database with dummy data:
two times write in bash - node seed.js

npm start
Backend will run at http://localhost:5100

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev
Frontend will run at http://localhost:5173

📖 Usage
Register/Login

Create Channel – Set name, picture, and banner

Upload Videos – Title, description, thumbnail, category

Browse & Search videos on homepage

Watch Videos – Like/dislike, comment, view related videos

Manage Channel – Edit/delete your own videos and comments

📜 License
This project is made purely for educational purposes as part of a Full Stack Development course.