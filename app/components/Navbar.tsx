"use client";
import MenuIcon from "./icons/common/MenuIcon";
import LogoNormal from "./icons/logo/black/LogoNormal";
import LogoHollowNofill from "./icons/logo/white/LogoHollowNofill";

export default function Navbar() {
  return (
    <div className="h-16 navbar ">
      {/* Logo & Mobile: Drawer */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Drawer Icon */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden btn-circle">
            <MenuIcon width={24} height={24} />
          </label>
          {/* Drawer Menu */}
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-60"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Blogs
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Featured</a>
                </li>
                <li>
                  <a>Recent</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Résumé</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <button className="flex items-center justify-center p-0 font-semibold normal-case btn btn-ghost h-fit">
          <LogoNormal width={200} height={52} />
          {/* <LogoHollowNofill width={200} height={52} /> */}
        </button>
      </div>

      {/* Desktop: Navbar Menu */}
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a className="gap-0">
              Blogs
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 border w-52 bg-base-100 border-base-200">
              <li>
                <a>All</a>
              </li>
              <li>
                <a>Featured</a>
              </li>
              <li>
                <a>Recent</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Résumé</a>
          </li>
        </ul>
      </div>

      {/* Navbar Buttons */}
      <div className="navbar-end">
        <a className="p-2 btn btn-outline btn-info">Get Notified</a>
      </div>
    </div>
  );
}
