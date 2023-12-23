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
    <div className="flex flex-col bg-gray-700 p-8 border border-gray-500 w-10/12 md:w-96 h-1/4  mb-8 justify-center items-center gap-4 mt-8 ">
      <div className="">
        <h2 className="text-gray-50 text-xl md:text-2xl">
          Pesquise por um usuário:
        </h2>
      </div>
      <div className="relative flex gap-2 p-4 lg:w-80">
        <input
          className="p-2 rounded-sm border border-gray-500 bg-gray-700 text-white w-full h-full pr-10" // Adiciona `pr-10` para dar espaço ao ícone
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => loadUser(userName)}
          className="absolute right-6 top-6 bg-gray-700 focus:outline-none"
        >
          <BsSearch className="text-gray-500 hover:text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
