import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar({ title }) {
  const { pathname } = useRouter();

  return (
    <motion.nav
      animate={{ opacity: 1, marginTop: 0 }}
      style={{ opacity: 0, marginTop: -10 }}
      transition={{ duration: 0.5 }}
      className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full"
    >
      <div className="mb-2 sm:mb-0">
        <Link href="/">
          <a className="text-2xl no-underline text-white font-bold">{title}</a>
        </Link>
      </div>
      <div>
        {pathname !== "/" ? (
          <Link href="/">
            <a className="text-lg no-underline bg-transparent04 hover:bg-transparent05 rounded-lg text-white hover:text-white ml-3 px-2 py-1 font-bold">
              <i className="material-icons middle-icon mr-1 text-xl">home</i>
              Home
            </a>
          </Link>
        ) : null}
        {pathname !== "/new" ? (
          <Link href="/new">
            <a className="text-lg no-underline bg-transparent04 hover:bg-transparent05 rounded-lg text-white hover:text-white ml-3 px-2 py-1 font-bold">
              <i className="material-icons middle-icon mr-1 text-xl">add</i>
              New
            </a>
          </Link>
        ) : null}
      </div>
    </motion.nav>
  );
}
