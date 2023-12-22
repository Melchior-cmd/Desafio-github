import { Link } from "react-router-dom";
import { UserProps } from "../types/user";

export function UserCard({
  login,
  avatar_url,
  followers,
  following,
  email,
  bio,
}: UserProps) {
  return (
    <div className="flex flex-col bg-gray-700 p-8 border border-gray-500 justify-center items-center gap-5 ">
      <img
        src={avatar_url}
        alt={login}
        width={140}
        height={140}
        className="border border-gray-500 rounded-full"
      />
      <h2 className="text-white">{login}</h2>
      {email && <h2 className="text-white">{email}</h2>}

      {bio && <h2 className="text-white truncate w-[25.9rem]">{bio}</h2>}
      <div className="flex gap-4">
        <div className="flex flex-col px-4 border-r border-gray-500">
          <p className="text-white">Seguidores</p>
          <p className="text-white px-7 border border-gray-500">{followers}</p>
        </div>
        <div className="flex flex-col px-2">
          <p className="text-white">Seguindo</p>
          <p className="text-white px-6 border border-gray-500">{following}</p>
        </div>
      </div>

      <Link
        to={`/repos/${login}`}
        className="bg-yellow-800 px-4 py-4 mt-2 rounded-xl text-gray-950 font-bold text-sm uppercase hover:bg-yellow-600 leading-tight"
      >
        Explore os projetos mais destacados
      </Link>
    </div>
  );
}
