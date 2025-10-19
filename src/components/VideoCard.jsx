import { Link } from "react-router-dom";

export default function VideoCard({ v }) {
  return (
    <Link to={`/video/${v.id}`} className="block rounded-2xl shadow p-3 hover:shadow-lg transition">
      <img src={v.miniatura} alt={v.titulo} className="w-full rounded-xl mb-3" loading="lazy" />
      <div className="flex items-center justify-between">
        <h3 className="font-semibold line-clamp-2">{v.titulo}</h3>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded">{v.duracion}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{v.descripcion}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {v.tags.map(t => <span key={t} className="text-xs bg-blue-50 px-2 py-0.5 rounded">{t}</span>)}
      </div>
    </Link>
  );
}
