# NovaRead - Full-Stack AI-Powered eBook Web Application

This is a premium, feature-rich eBook platform that includes fully functional AI recommendations, modern UI/UX with glassmorphism, gradient accents, and Framer Motion animations.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, React Router, Axios, Lucide Icons.
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt.js.
- **Features**: JWT Authentication, AI Recommendation logic (Content-Based, Collaborative, Trending), User Dashboard, eBooks browsing, details, and PDF integration readiness.

---

##  How to Run Locally

### 1. Backend Setup
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies (already done if you followed generation, but just in case):
   ```bash
   npm install
   ```
3. Set up your `.env` file (A sample one is provided). Ensure your MongoDB URI is valid.
4. Run the backend server:
   ```bash
   npm run dev
   ```
   The server will start on http://localhost:5000

### 2. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The UI will usually start on http://localhost:5173

---

##  How to Deploy

### Deploying the Backend (Render)
1. Push your code to a GitHub repository.
2. Sign up on [Render.com](https://render.com/).
3. Click **New +** and select **Web Service**.
4. Connect your GitHub repo and select the `backend` branch/folder.
5. Set the Start Command to `node server.js` and Build Command to `npm install`.
6. Add your Environment Variables (`MONGO_URI`, `JWT_SECRET`, etc.).
7. Click **Deploy**.

### Deploying the Frontend (Vercel)
1. Sign up on [Vercel.com](https://vercel.com/).
2. Click **Add New** > **Project** and import your GitHub repo.
3. Select the `frontend` directory as the Root Directory.
4. The Build Command (`npm run build`) and Output Directory (`dist`) should be auto-detected for Vite.
5. Add any required environment variables (e.g., `VITE_API_URL=https://your-render-backend-url.com/api`).
6. Click **Deploy**.

---

##  AI Recommendation Engine Logic
The AI recommendation engine resides in `backend/controllers/recommendationController.js`. It uses a combination of techniques:
1. **Content-Based Filtering**: Matches books by comparing a user's stored preferences (genres, favorite authors) with the book's metadata. 
2. **Collaborative Filtering**: Determines "Users like you also read" by finding overlapping reading histories in the MongoDB database, then suggesting the non-overlapping books to the current user.
3. **Trending Algorithms**: Books with the highest combination of views and ratings naturally surface.
4. **AI Chat Mock**: A highly styled conversational UI built on the frontend that simulates ChatGPT-like interactions for querying dynamic book titles based on textual prompts.

Enjoy building your ultimate eBook application!
