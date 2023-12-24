/* eslint-disable no-debugger */
import { UserProps } from "../types/user";
import { useState } from "react";
import { Search } from "../components/Search";
import { api } from "../services/api";
import { Header } from "../components/Header";
import { UserCard } from "../components/UserCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Spinner } from "../components/Spinner";
import { BackButton } from "../components/BackButton";

export function SearchUser() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const UserSuccess = () => {
    toast.success("Usuário localizado com sucesso!.", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      containerId: "A",
    });
  };

  const UserErrorNotification = () => {
    toast.error(
      "Usuário não encontrado!, por favor preencha um usuário valido.",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        containerId: "B",
      }
    );
  };

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
      UserSuccess();
    } catch (error) {
      UserErrorNotification();
      console.error("Erro na requisição:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <BackButton />
      <div className=" w-full h-screen bg-gray-700 ">
        <ToastContainer enableMultiContainer containerId={"A"} />
        <ToastContainer enableMultiContainer containerId={"B"} />
        <div className="flex flex-col  h-screen  justify-center items-center ">
          <Search loadUser={loadUser} />

          {user && <UserCard {...user} />}
          {isLoading && <Spinner />}
        </div>
      </div>
    </>
  );
}
