import { Link } from "react-router-dom";
import logoReact from "../assets/Mulher.svg";
import { Header } from "../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto w-full h-screen bg-gray-700 ">
        <div className="max-w-[1300px] h-screen mx-auto grid grid-cols-2 gap-3 items-center ">
          <main className="p-4">
            <h2 className="lg:mb-14 mb-4 text-gray-200 text-1xl sm:text-2xl font-light leading-tight">
              👏Olá, Bem-vindo
            </h2>
            <h1 className="mt-1 text-white  text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Descubra todo o potencial do seu GitHub com nossa Consultoria
              Especializada!
            </h1>

            <Link
              to="/user"
              className="text-center w-2/3  lg:w-44 sm:w-32 bg-yellow-800 px-4 lg:py-6  py-2 mt-10 rounded-xl text-gray-950 font-bold text-xs lg:text-sm uppercase hover:bg-yellow-600 leading-tight"
              type="submit"
            >
              Consultar usuario
            </Link>
          </main>

          <img src={logoReact} alt="LogoMulher" className="p-2" />
        </div>
      </div>
    </>
  );
}
