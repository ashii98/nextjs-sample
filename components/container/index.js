export default function Container({ className = "", children }) {
  return <div className={`container mx-auto p-16 ${className}`}>{children}</div>;
}
