import Link from "next/link";

export default function CustomLink({ title, href, color }) {
  return (
    <div className="my-3">
      <Link href={href}>
        <a
          className={`bg-white text-gray-800 font-bold rounded border-b-2 border-${color}-500 hover:border-${color}-600 hover:bg-${color}-500 hover:text-white shadow-md py-2 px-4 inline-flex items-center transition-all`}
        >
          {title}
        </a>
      </Link>
    </div>
  );
}
