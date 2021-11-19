import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function PlusBtn() {
  return (
    <div className="absolute bottom-0 right-0 m-3">
      <Link to="/new/doc">
        <button className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full font-bold shadow-lg outline-none">
          <BsPlusLg className="font-bold" />
        </button>
      </Link>
    </div>
  );
}

export default PlusBtn;
