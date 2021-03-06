import { ImSearch } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Modal from "../helpers/modal/Modal";
import LogoutModal from "./LogoutModal";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Navbar() {
  const [searchClick, setSearchClick] = useState(false);
  const user = useSelector((state) => state.authReducer.auth);
  const [openModal, setOpenModal] = useState(false);
  const loginSuccess = async (result) => {
    const data = {
      email: result?.profileObj?.email,
      name: result?.profileObj?.name,
      gid: result?.profileObj?.googleId,
      img: result?.profileObj?.imageUrl,
    };
    try {
      const url = "http://localhost:5000";
      await axios.post(`${url}/auth/add/user`, data);
    } catch (error) {
      toast.error("An error occurred");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    var jsonString = JSON.stringify(data);
    console.log(jsonString);
    Cookies.set("user", jsonString, { expires: 7 });
    toast.success("Login Success");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const loginFailure = () => {
    console.log("login failure");
  };
  return (
    <>
      <Toaster />
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        component={<LogoutModal />}
      />
      <div className="border-b-2 shadow-md">
        <div className="xs:mx-5 mx-2 my-3 flex justify-between items-center">
          {!searchClick && (
            <p className="animate__animated animate__fadeInLeft text-2xl font-semibold italic cursor-pointer">
              AirBoard
            </p>
          )}
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
            {!user ? (
              <GoogleLogin
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                render={(renderProps) => (
                  <div
                    className="xs:text-4xl text-2xl cursor-pointer"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <BiUserCircle />
                  </div>
                )}
                buttonText=""
                onSuccess={loginSuccess}
                onFailure={loginFailure}
                cookiePolicy={"single_host_origin"}
              />
            ) : (
              <img
                src={user?.img}
                alt="avatar"
                className="rounded-full w-8 h-8 xs:w-10 xs:h-10 cursor-pointer"
                onClick={() => setOpenModal(true)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
