# NovaRead - Full-Stack AI-Powered eBook Web Application

This is a premium, feature-rich eBook platform that includes fully functional AI recommendations, modern UI/UX with glassmorphism, gradient accents, and Framer Motion animations.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, React Router, Axios, Lucide Icons
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt.js
- **Features**: JWT Authentication, AI Recommendation logic (Content-Based, Collaborative, Trending), User Dashboard, eBooks browsing, details, and PDF integration readiness

---

## How to Run Locally

### 1. Backend Setup
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file (ensure your MongoDB URI is valid)
4. Run the backend server:
   ```bash
   npm run dev
   ```
   Server runs at: `http://localhost:5000`

### 2. Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
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
   UI runs at: `http://localhost:5173`

---

## How to Deploy

### Deploying the Backend (Render)
1. Push your code to GitHub
2. Sign up on [Render](https://render.com/)
3. Click **New +** → **Web Service**
4. Connect your repo and select `backend`
5. Start Command:  
   ```bash
   node server.js
   ```
6. Build Command:  
   ```bash
   npm install
   ```
7. Add Environment Variables:
   - `MONGO_URI`
   - `JWT_SECRET`
8. Click **Deploy**

### Deploying the Frontend (Vercel or GitHub Pages)
1. Sign up on [Vercel](https://vercel.com/)
2. Click **Add New → Project**
3. Import your repo
4. Select `frontend` as root directory
5. Build Command:
   ```bash
   npm run build
   ```
6. Output Directory:
   `dist`
7. Add environment variable:
   `VITE_API_URL=https://your-render-backend-url.com/api`
8. Click **Deploy**

---

## AI Recommendation Engine Logic

The AI recommendation engine is located in: `backend/controllers/recommendationController.js`

It uses:
1. **Content-Based Filtering**  
   Matches books based on user preferences like genres and authors
2. **Collaborative Filtering**  
   Suggests books based on users with similar reading behavior
3. **Trending Algorithm**  
   Highlights books with high views and ratings
4. **AI Chat Mock**  
   A styled frontend chat UI simulating ChatGPT-like interaction

---

## Notes
- A `.nojekyll` file has been added to bypass GitHub Pages Jekyll parsing errors.
- Keep environment variables inside backticks as shown above.

---
Enjoy building your eBook application!
