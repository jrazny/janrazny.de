import Link from "next/link";
import { MdAddHome } from "react-icons/md";
import { SocialIcon } from 'react-social-icons';

interface Props {
  socialIcons: SocialIcon[];
}

const Header = ({ socialIcons }: Props) => {
  return (
    <>
      <header className="z-20 flex items-center justify-between px-5 py-3 shadow-lg bg-violet-100 text-zinc-800 dark:bg-zinc-800 dark:text-white h-[60px] sticky top-0">
        <Link href="/" className="flex items-center space-x-1 text-lg font-light tracking-widest">
            <span className="text-sky-700">
              JR
            </span>
            <i>
              <MdAddHome className="w-10 h-10 text-sky-700" />
            </i>
        </Link>
        <div className="hidden space-x-5 sm:items-center sm:flex">
          <a href="#technologies" className="text-lg font-bold text-sky-700">
            Technologien
          </a>
          <a href="#about" className="text-lg font-bold text-sky-700">
            Über ich
          </a>
          <a href="#projects" className="text-lg font-bold text-sky-700">
            Projekte
          </a>
          <a href="#contact" className="text-lg font-bold text-sky-700">
            Kontakt
          </a>
        </div>
        <div className="flex items-center space-x-5">
          {socialIcons.map((icon) => (
            // eslint-disable-next-line react/jsx-key
            <SocialIcon
              url={icon.url}
              bgColor="rgb(3,105,161)" 
              fgColor="white"
              style={{width:40,height:40}} 
            /> 
          ))}      
        </div>
      </header>
    </>
  );
};

export default Header;