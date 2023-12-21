import { KeyboardEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  loadUser: (username: string) => Promise<void>;
}

export function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  }

  return (
    <div className="flex flex-col  bg-gray-700 p-8 border border-gray-500 h-52 w-3/12 mb-12 justify-center items-center gap-4 ">
      <div className="">
        <h2 className="text-gray-50 text-2xl">Pesquise por um usuário:</h2>
      </div>
      <div className="flex gap-2 p-4 ">
        <input
          className="p-2 rounded-sm border border-gray-500 bg-gray-700 text-white"
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)} className="bg-gray-70  ">
          <BsSearch className=" text-gray-500 hover:text-white w-5 h-5  " />
        </button>
      </div>
    </div>
  );
}
