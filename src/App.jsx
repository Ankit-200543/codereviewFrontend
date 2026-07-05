import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Editor from "./Pages/Editor";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  );
}