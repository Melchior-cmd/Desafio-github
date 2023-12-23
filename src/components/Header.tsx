import logo from "../assets/github-logo.png";
import logoName from "../assets/github-logo-name.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-40 ">
      <div className="hidden sm:block ">
        <div className=" flex  align-middle items-center px-4 py-2 md:py-3 md:px-6 lg:px-8 lg:py-4 xl:px-12 shadow-md bg-gray-800  w-full p-2 top-0 left-0  h-20">
          <div className=" flex  items-center mt-2">
            <img src={logo} alt="logo" width={50} height={50} />
            <img
              src={logoName}
              alt="logo"
              width={60}
              height={60}
              className="mr-[12rem]   sm:mr-[29rem]"
            />
          </div>
          <ul className="flex list-none flex-row space-x-8 lg:space-x-10 xl:space-x-4 text-gray-500">
            <Link to="/" className="text-white py-4 px-4 hover:text-gray-200 ">
              Home
            </Link>
            <Link
              to="/user"
              className="text-white py-4 px-4  hover:text-gray-200"
            >
              Buscar
            </Link>
          </ul>
        </div>
      </div>

      {/* navbar for small devices */}
      <div className="sm:hidden">
        <div className="flex bg-gray-800 justify-between align-middle items-center px-4 py-2 z-20">
          <div className=" flex  items-center mt-2">
            <img src={logo} alt="logo" width={50} height={50} />
            <img src={logoName} alt="logo" width={60} height={60} />
          </div>
          <span>
            {isMenuOpen ? (
              <FiX
                className=" py-1  mx-1 rounded   hover:bg-gray-200 w-9 h-9 text-gray-950 bg-white cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FiMenu
                className="py-1 mx-1 rounded hover:bg-gray-200 w-9 h-9 text-gray-950 bg-white cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </span>
        </div>

        <div
          className={`list-none space-y-2 pt-2 py-2 px-2 text-gray-500 bg-gray-800 shadow-md -z-10 absolute w-full ${
            isMenuOpen ? "-translate-y-0" : "-translate-y-full"
          } transition-all ease-in-out`}
        >
          <Link
            to="/"
            className="flex h-full text-white  hover:text-gray-200 hover:bg-gray-500"
          >
            Home
          </Link>
          <Link
            to="/user"
            className=" flex h-full text-white   hover:text-gray-200 hover:bg-gray-500"
          >
            Buscar
          </Link>
        </div>
      </div>
    </nav>
  );
}
