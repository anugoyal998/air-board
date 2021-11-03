import { ImSearch } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";

function Navbar() {
  const [searchClick, setSearchClick] = useState(false);
  console.log(searchClick);
  return (
    <div className="border-b-2">
        <div className="xs:mx-5 mx-2 my-3 flex justify-between items-center">
      { !searchClick && (<p className="animate__animated animate__fadeInLeft text-2xl font-semibold italic cursor-pointer">AirBoard</p>)}
      <div className="hidden sm:flex items-center bg-gray-100 rounded-sm border">
        <div className="p-3">
          <ImSearch />
        </div>
        <input
          type="search"
          placeholder="Search"
          className="py-2 pr-4 outline-none bg-gray-100 sm:w-96"
        />
      </div>
      {searchClick && (
        <div className="animate__animated animate__fadeInRight flex items-center bg-gray-100 rounded-sm border">
          <div className="xs:p-3 p-2">
            <ImSearch />
          </div>
          <input
            type="search"
            placeholder="Search"
            className="xs:py-2 py-1 pr-4 outline-none bg-gray-100 w-48 xs:w-60"
          />
        </div>
      )}
      <div className="flex items-center space-x-3">
        <div
          className="sm:hidden xs:text-3xl text-xl cursor-pointer"
          onClick={() => setSearchClick(!searchClick)}
        >
          <ImSearch />
        </div>
        <div className="xs:text-4xl text-2xl cursor-pointer">
          <BiUserCircle />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
