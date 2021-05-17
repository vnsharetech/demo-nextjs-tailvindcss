import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  };

  const menuItem = [
    {
      title: "Why Sprinto",
      link: "/why-sprinto",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Sign in",
      link: "/sign-in",
    },
  ];

  const listItems = menuItem.map((item, ind) => (
    <li className="md:ml-2" key={ind}>
      <Link href={item.link}>
        <a
          title="Why Sprinto"
          className="px-2 py-1.5 text-navigation font-base leading-6 block"
        >
          {item.title}
        </a>
      </Link>
    </li>
  ));

  return (
    <div className="md:flex mt-10 justify-between relative">
      <div>
        <Link href="/">
          <a>
            <img src="/logo-sprinto.svg" alt="Picture of the author" />
          </a>
        </Link>
      </div>
      <div
        className="md:hidden cursor-pointer absolute top-0 right-0"
        onClick={showMenu}
      >
        <img src="/nav.svg" />
      </div>
      <ul
        className={`hidden mt-4 md:mt-0 md:flex ${menu ? styles.showmneu : ""}`}
      >
        {listItems}
        <li className="md:ml-2">
          <Link href="/">
            <a
              title="Get a Demo"
              className="px-2 py-1.5 bg-orange-light rounded-md text-orange font-base leading-6 block"
            >
              Get a Demo
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
