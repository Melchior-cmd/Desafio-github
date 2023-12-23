import { RepositoriesProps } from "../types/Repositories";
import { FaLaptopCode } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
export function RepositoriesCard({
  name,
  language,
  html_url,
  description,
  stargazers_count,
}: RepositoriesProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col bg-gray-700 p-8 rounded-lg border border-solid border-gray-500 items-start gap-4 w-1/2 mb-4">
        <h3 className="text-blue-500 text-xl">{name}</h3>
        <span className="w-5/6 inline-block  mb-2 whitespace-no-wrap overflow-hidden overflow-ellipsis text-gray-400">
          {`${description.slice(0, 150)}`}
        </span>

        <div className="grid sm:flex">
          <p className="text-gray-400 flex gap-2 mt-2 cursor-pointer hover:text-blue-500">
            <FaLaptopCode className="mt-1" />
            {language}
          </p>
          <div className="flex text-lg items-center justify-center gap-0.5 rounded-sm pl-2 bg-gray-700 text-gray-400 cursor-pointer hover:text-blue-500">
            <AiOutlineStar className="rounded-sm text-2xl mt-1" />
            <span className="text-xs">{stargazers_count}</span>
          </div>
        </div>

        <Link
          to={html_url}
          target="_blank"
          className="text-center bg-yellow-800 px-2 md:px-4 md:py-4 py-2 mt-2 rounded-xl text-gray-950 font-bold text-sm uppercase hover:bg-yellow-600 leading-tight"
        >
          Visualizar repositorio
        </Link>
      </div>
    </div>
  );
}
