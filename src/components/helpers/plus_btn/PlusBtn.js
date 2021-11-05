import {BsPlusLg} from 'react-icons/bs';


function PlusBtn() {
  return (
    <div className="absolute bottom-0 right-0 m-3">
      <button className="w-12 h-12 bg-black text-white flex justify-center items-center rounded-full font-bold shadow-lg outline-none"><BsPlusLg className="font-bold" /></button>
    </div>
  );
}

export default PlusBtn;
