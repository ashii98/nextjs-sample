export default function Button({ title, onClick, color, icon, className }) {
  return (
    <button
      onClick={() => onClick()}
      className={`bg-white text-gray-800 font-bold rounded border-b-2 border-${color}-500 hover:border-${color}-600 hover:bg-${color}-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center transition-all ${className}`}
    >
      {icon ? (
        <>
          {title ? <span className="mr-2">{title}</span> : null}
          <i className="material-icons">{icon}</i>
        </>
      ) : (
        title
      )}
    </button>
  );
}
