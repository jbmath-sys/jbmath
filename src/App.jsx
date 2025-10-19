import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";

export default function App() {
  return (
    <HashRouter>
      <div className="container-page">
        <header className="flex items-center justify-between mb-6">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="JBMATH" className="w-8 h-8" />
            <span className="font-bold text-xl">JBMATH</span>
          </a>
          <nav className="text-sm text-gray-600 hidden sm:block">
            Videos · Playlists · Sobre mí
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
        <footer className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} JBMATH · Aprende matemáticas paso a paso
        </footer>
      </div>
    </HashRouter>
  );
}
