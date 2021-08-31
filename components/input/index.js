export default function Input({ placeholder, value, name, type, className, onChange }) {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {type === "text" ? (
        <input
          onChange={(e) => onChange(e.target.value)}
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-3"
        />
      ) : (
        <textarea
          rows={3}
          onChange={(e) => onChange(e.target.value)}
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          className="max-h-52 text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-3"
        ></textarea>
      )}
    </div>
  );
}
