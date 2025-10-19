import { useParams, Link } from "react-router-dom";
import data from "../data/videos.json";

export default function Video() {
  const { id } = useParams();
  const v = data.find(x => x.id === id);

  if (!v) {
    return <div className="py-10">Video no encontrado. <Link to="/" className="underline">Volver</Link></div>;
  }

  return (
    <article className="grid gap-4">
      <Link to="/" className="text-sm underline">&larr; Volver</Link>
      <h1 className="text-2xl font-bold">{v.titulo}</h1>
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube-nocookie.com/embed/${v.id}`}
          title={v.titulo}
          allowFullScreen
        />
      </div>
      <p className="text-gray-700">{v.descripcion}</p>
      <div className="flex gap-2 flex-wrap">
        {v.tags.map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>)}
      </div>
    </article>
  );
}
