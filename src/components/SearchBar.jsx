export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="w-full md:w-96 border rounded-xl px-4 py-2 outline-none focus:ring"
      placeholder="Buscar: ecuaciones, derivadas, probabilidad..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
