import { useNavigate } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="fixed px-2 py-2 border-none rounded-sm  mt-8 text-4xl text-yellow-800 hover:text-yellow-700"
      >
        <IoReturnUpBackSharp />
      </button>
    </>
  );
}
