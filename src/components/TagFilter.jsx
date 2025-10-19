export default function TagFilter({ tags, active, onToggle }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map(t => (
        <button
          key={t}
          onClick={() => onToggle(t)}
          className={`text-sm px-3 py-1 rounded-full border ${active.includes(t) ? "bg-black text-white" : "bg-white"}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
