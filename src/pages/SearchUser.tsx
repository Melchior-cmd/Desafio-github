/* eslint-disable no-debugger */
import { UserProps } from "../types/user";
import { useState } from "react";
import { Search } from "../components/Search";
import { api } from "../services/api";
import { Header } from "../components/Header";
import { UserCard } from "../components/UserCard";

import { Spinner } from "../components/Spinner";

export function SearchUser() {
  const [user, setUser] = useState<UserProps | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (username: string) => {
    try {
      setUser(null);
      setIsLoading(true);

      const response = await api.get(
        `https://api.github.com/users/${username}`
      );

      const data = response.data;

      const { avatar_url, login, email, bio, followers, following } = data;

      const userData: UserProps = {
        avatar_url,
        login,
        email,
        bio,
        followers,
        following,
      };

      setUser(userData);
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className=" w-full h-screen bg-gray-700 ">
        <div className="flex flex-col  h-screen  justify-center items-center ">
          <Search loadUser={loadUser} />

          {user && <UserCard {...user} />}
          {isLoading && <Spinner />}
        </div>
      </div>
    </>
  );
}
