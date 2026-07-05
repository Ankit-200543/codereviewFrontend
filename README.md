# CodeReviewAI

AI-powered code review web app. Paste code in a Monaco editor, submit it for review, and get instant feedback on bugs, performance, readability, and security — plus an improved version you can apply with one click.

## Features

- **Monaco code editor** — Write and edit code with syntax highlighting
- **AI code review** — Score, verdict, and categorized feedback from the backend API
- **Split-panel workspace** — Editor on the left, review results on the right
- **One-click fix** — Replace your code with the AI-suggested improved version
- **Responsive layout** — Mobile-friendly tabs to switch between editor and results
- **Landing page** — Overview of the product with navigation to the editor

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React, Vite, Tailwind CSS, Monaco Editor, React Router, Axios |
| Backend | REST API (deployed separately on Render) |

## Project Structure

```
src/
├── Pages/
│   ├── Home.jsx          # Landing page
│   └── Editor.jsx        # Editor + review results workspace
├── compoents/
│   ├── CodeEditor.jsx    # Monaco editor wrapper
│   ├── ScoreCard.jsx     # Review score and verdict
│   ├── ReviewCard.jsx    # Category feedback (bugs, performance, etc.)
│   └── ImprovedCode.jsx  # Suggested refactored code
├── App.jsx               # Routes
└── main.jsx              # App entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- A running backend API (see [Environment Variables](#environment-variables))

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

## Routes

| Path | Page |
|------|------|
| `/` | Home — landing page |
| `/editor` | Editor — code input and AI review results |

## API Integration

The frontend sends code to the backend for review:

**Endpoint:** `POST /api/reviewcode`

**Request body:**
```json
{
  "code": "function example() { ... }"
}
```

**Response shape:**
```json
{
  "ReviewedCode": {
    "score": 8,
    "verdict": "Good Code Quality",
    "bugs": [{ "location": "Line 3", "description": "..." }],
    "performance": [],
    "readability": [],
    "security": [],
    "improvedCode": "..."
  }
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

Private project.



backend:-https://github.com/Ankit-200543/codereview



