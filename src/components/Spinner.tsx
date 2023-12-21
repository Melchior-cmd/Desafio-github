import Loading from "../assets/Loading3.svg";

export function Spinner() {
  return (
    <div className="flex justify-center items-center ">
      <img src={Loading} alt="Loading" width={60} />
    </div>
  );
}
