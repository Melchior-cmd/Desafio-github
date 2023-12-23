import { useNavigate } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="absolute px-2 py-2 border-none rounded-md  mt-2 text-4xl text-yellow-800 hover:text-yellow-700 hover:bg-gray-800"
      >
        <IoReturnUpBackSharp />
      </button>
    </>
  );
}
