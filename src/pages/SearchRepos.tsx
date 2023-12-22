import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepositoriesProps } from "../types/Repositories";
import { api } from "../services/api";
import { RepositoriesCard } from "../components/RepositoriesCard";
import { Header } from "../components/Header";
import { Spinner } from "../components/Spinner";
import { BackButton } from "../components/BackButton";

export function SearchRepos() {
  const { username } = useParams();
  const [repositories, setRepositories] = useState<
    RepositoriesProps[] | [] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadingRepositories(username: string) {
      setIsLoading(true);

      const response = await api.get(
        `https://api.github.com/users/${username}/repos`
      );

      const data = response.data;

      setIsLoading(false);

      let orderRepositories = data.sort(
        (a: RepositoriesProps, b: RepositoriesProps) =>
          b.stargazers_count - a.stargazers_count
      );

      orderRepositories = orderRepositories.slice(0, 6);
      setRepositories(orderRepositories);
    }

    if (username) {
      loadingRepositories(username);
    }
  }, [username]);

  return (
    <>
      <Header />
      <BackButton />
      <div className="flex flex-col justify-center items-center bg-gray-700 p-8 border border-gray-500 gap-8 mt-12 w-full h-full">
        <h2 className="text-white items-center mt-8 text-2xl">
          explore o repositório do {username} para conhece melhor sobre seus
          trabalhos.
        </h2>

        {isLoading && <Spinner />}
        {repositories && repositories.length === 0 && (
          <p className="text-white">Não há repositórios.</p>
        )}
        {repositories && repositories.length > 0 && (
          <div>
            {repositories.map((item: RepositoriesProps) => (
              <RepositoriesCard key={item.name} {...item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
