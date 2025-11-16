# 🧠 Resume Analyzer — AI-Powered Smart Resume Insights  
**Live Demo:** https://resume-analyzer-by-om.netlify.app/

An intelligent, lightning-fast **AI Resume Analyzer** built with modern frontend technologies and powered by **Google Gemini** on the backend. It extracts skills, evaluates job-readiness, and provides a clean structured summary from any uploaded PDF resume.

---

## ⭐ Features

### 🚀 1. AI-Powered Summary Generation
Automatically generates a clear, concise, and professional summary based on resume content using **Google Gemini**.

### 🧩 2. Skills Extraction
Detects and categorizes:
- Technical skills  
- Soft skills  
- Tools & technologies  
- Domain-specific competencies  

All neatly structured for quick reading.

### 📊 3. Resume Score (Job-Readiness Rating)
Gives a detailed resume score based on:
- Structure  
- Clarity  
- Skills  
- Experience quality  
- Real-world job readiness  

Also includes improvement suggestions.

### 📝 4. Clean UI/UX
Built with:
- React + Vite
- Shadcn/UI
- Tailwind CSS

### ⚡ 5. Fast & Lightweight
- Fully frontend-powered  
- Gemini API handled through backend  
- Instant and optimized response times  

---

## 🛠️ Tech Stack

### Frontend
- React  
- Vite  
- Shadcn/UI  
- Tailwind CSS  

### Backend
- Google Gemini API  
- PDF text parsing  
- REST API endpoints  

### Deployment
- Netlify (Frontend)

---

## 📂 Project Structure

```
/src
  /components
  /features
  /pages
  /utils
  /api
/public
backend/
README.md
```

---

## 🚀 How It Works

1. Upload your resume (PDF)  
2. Text is extracted  
3. Data sent to backend Gemini API  
4. Gemini returns:  
   - Summary  
   - Skills  
   - Score  
   - Suggestions  
5. UI displays everything beautifully in accordion sections  

---

## 🧪 API Flow (Gemini Backend)

```
Frontend → Resume PDF → Extract Text → Send to Backend  
Backend → Gemini API → AI Processing → Return Result  
Frontend → Display Output
```

---

## ▶️ Getting Started (Local Development)

### 1. Clone Repo
```
git clone https://github.com/your-username/resume-analyzer.git
cd resume-analyzer
```

### 2. Install Dependencies
```
npm install
```

### 3. Create .env File
```
VITE_BACKEND_URL=http://localhost:5000
```

### 4. Start Dev Server
```
npm run dev
```

---

## 🌐 Live Demo
👉 **https://resume-analyzer-by-om.netlify.app/**

---

## 📝 License
MIT License © 2025 OM BHARGAV
