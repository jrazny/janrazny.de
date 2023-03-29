import Link from "next/link";
import { MdAddHome } from "react-icons/md";

const Header = () => {
  return (
    <header className="z-20 flex items-center justify-between px-5 py-3 shadow-lg bg-violet-100 text-zinc-800 dark:bg-zinc-800 dark:text-white h-[60px] sticky top-0">
      <Link href="/" className="flex items-center space-x-1 text-lg font-light tracking-widest">
          <span>
            CMP
          </span>
          <i>
            <MdAddHome className="w-10 h-10" />
          </i>
      </Link>
    </header>
  );
};

export default Header;