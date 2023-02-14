import Link from "next/link";
import MenuIcon from "./icons/common/MenuIcon";
// import LogoNormal from "./icons/logo/black/LogoNormal";
import LogoHollowNofill from "./icons/logo/white/LogoHollowNofill";

const menuList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
];

export default function Navbar() {
  return (
    <div className="h-16 navbar">
      <div className="navbar-start">
        <Drawer />
        <Logo />
      </div>

      <NavbarMenu />

      {/* Navbar Buttons */}
      <div className="navbar-end">
        {/* <a className="p-2 btn btn-outline btn-info">Contact</a> */}
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <button className="flex items-center justify-center p-0 font-semibold normal-case btn btn-ghost h-fit hover:bg-transparent">
      {/* <LogoNormal width={200} height={52} /> */}
      <LogoHollowNofill width={200} height={52} />
    </button>
  );
};

/** Drawer for Mobile  */
const Drawer = () => {
  return (
    <div className="dropdown">
      {/* Drawer Icon */}
      <label tabIndex={0} className="btn btn-ghost lg:hidden btn-circle">
        <MenuIcon width={24} height={24} />
      </label>

      {/* Menu */}
      <ul
        tabIndex={0}
        className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-60"
      >
        {menuList.map(({ name, link }, index) => (
          <li key={index}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

/** Menu for Desktop */
const NavbarMenu = () => {
  return (
    <div className="hidden navbar-center lg:flex">
      <ul className="px-1 menu menu-horizontal">
        {menuList.map(({ name, link }, index) => (
          <li key={index}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
