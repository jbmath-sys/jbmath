import { useMemo, useState } from "react";
import data from "../data/videos.json";
import VideoCard from "../components/VideoCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TagFilter from "../components/TagFilter.jsx";

export default function Home() {
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  const tags = useMemo(() => {
    const s = new Set();
    data.forEach(v => v.tags.forEach(t => s.add(t)));
    return Array.from(s).sort();
  }, []);

  function toggleTag(t) {
    setActiveTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  }

  const filtered = useMemo(() => {
    const text = q.toLowerCase();
    return data.filter(v => {
      const matchesText =
        v.titulo.toLowerCase().includes(text) ||
        v.descripcion.toLowerCase().includes(text) ||
        v.tags.join(" ").toLowerCase().includes(text);
      const matchesTags = activeTags.length === 0 || activeTags.every(t => v.tags.includes(t));
      return matchesText && matchesTags;
    });
  }, [q, activeTags]);

  return (
    <main>
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
        <SearchBar value={q} onChange={setQ} />
        <TagFilter tags={tags} active={activeTags} onToggle={toggleTag} />
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(v => <VideoCard key={v.id} v={v} />)}
      </section>
    </main>
  );
}
