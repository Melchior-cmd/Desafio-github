import logo from "../assets/github-logo.png";
import logoName from "../assets/github-logo-name.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className=" bg-gray-800 fixed  w-full p-2 top-0 left-0  h-20">
      <div className="container  flex justify-start items-center mt-2">
        <img src={logo} alt="logo" width={50} height={50} />
        <img
          src={logoName}
          alt="logo"
          width={60}
          height={60}
          className="mr-[12rem]   sm:mr-[29rem]"
        />
        <div className="hidden md:flex items-center pr-10 text-base font-semibold ">
          <Link to="/" className="text-white py-4 px-6 hover:text-gray-200 ">
            Home
          </Link>
          <Link
            to="/user"
            className="text-white py-4 px-6  hover:text-gray-200"
          >
            Buscar
          </Link>
        </div>

        <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none bg-gray-50 hover:bg-gray-300 group">
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="absolute top-0 -right-full h-screen w-8/12 bg-gray-700 border border-gray-500 opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
            <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
              <Link
                to="/"
                className="text-white py-4 px-6 hover:text-gray-200 w-full hover:bg-gray-300"
              >
                Home
              </Link>
              <Link
                to="/user"
                className="text-white py-4 px-6  hover:text-gray-200 hover:bg-gray-300 w-full"
              >
                Buscar
              </Link>
            </ul>
          </div>
        </button>
      </div>
    </nav>
  );
}
