import { useSelector } from "react-redux";
import Cookies from "js-cookie";

function LogoutModal() {
  const user = useSelector((state) => state.authReducer.auth);
  const handleLogout = () => {
    Cookies.remove("user");
    window.location.reload();
  };
  return (
    <div className="animate__animated animate__fadeInDown flex flex-col items-center space-x-3 bg-white p-8 shadow-lg rounded-lg">
      <div className="flex justify-center items-center">
        <img
          src={user?.img}
          alt={`${user.name}`}
          className="rounded-full border"
        />
        <div className="ml-3">
          <p className="text-lg font-semibold capitalize">{user?.name}</p>
          <p className="text-lg italic">{user.email}</p>
        </div>
      </div>
      <button
        className="bg-red-500 w-full text-white font-semibold text-xl p-2 rounded-lg mt-5 outline-none"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutModal;
