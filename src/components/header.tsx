import { Menu, X } from "lucide-react";
import {
  SiGithub,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 py-6 sticky top-0 z-50 backdrop-blur-md bg-bp-sky-500/80">
        <h1
          id="bluepages_logo"
          className="text-4xl md:text-7xl text-bp-horizon-200 font-bold transition duration-200 ease-in-out hover:text-bp-ink-950"
        >
          <a href={`${import.meta.env.BASE_URL}`}>bluepages</a>
        </h1>
        <nav className="hidden lg:block">
          {/* get current page and bold the appropriate link */}
          <ul className="flex gap-4 text-xl text-bp-ink-950">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">blog</Link>
            </li>
            <li>
              <Link to="/">projects</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
          </ul>
        </nav>

        <Menu
          className="lg:hidden"
          onClick={() => {
            setMenuVisible(true);
          }}
        />
      </div>

      {menuVisible && <MobileMenu setMenuVisible={setMenuVisible} />}
    </>
  );
}

function MobileMenu({
  setMenuVisible,
}: {
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-50 flex gap-4 px-4 py-8 justify-between items-start backdrop-blur-md bg-bp-sky-500/80 fade--in"
    >
      <div>
        <ul className="flex flex-col gap-4 md:gap-8 text-xl md:text-4xl text-bp-ink-950">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/">blog</Link>
          </li>
          <li>
            <Link to="/">projects</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </ul>
        <div className="flex gap-4 mt-6">
          <a href="">
            <SiGithub />
          </a>
          <a href="">
            <SiYoutube />
          </a>
          <a href="">
            <SiInstagram />
          </a>
        </div>
      </div>
      <X
        size={24}
        onClick={() => {
          // change the fade in to a fade out and then unmount after the animation is done
          const menu = document.querySelector("#mobile-menu"); // classic dom manipulation epic
          if (menu) {
            menu.classList.remove("fade--in");
            menu.classList.add("fade--out");
            setTimeout(() => setMenuVisible(false), 100);
          } else {
            setMenuVisible(false);
          }
        }}
      />
    </div>
  );
}
