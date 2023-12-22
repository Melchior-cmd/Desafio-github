import logo from "../assets/github-logo.png";
import logoName from "../assets/github-logo-name.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex bg-gray-800  fixed w-full max-auto items-center p-4 top-0 gap-2 h-20">
      <img src={logo} alt="logo" width={50} height={50} />
      <img
        src={logoName}
        alt="logo"
        width={60}
        height={60}
        className="mr-[20rem]"
      />

      <div className="flex items-center justify-center gap-8">
        <Link
          to="/"
          className="text-white w-full text-md font-normal hover:text-gray-200"
        >
          Home
        </Link>
        <Link
          to="/user"
          className="text-white w-full text-md font-normal hover:text-gray-200"
        >
          Buscar
        </Link>
      </div>
    </div>
  );
}
