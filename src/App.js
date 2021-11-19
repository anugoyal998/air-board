import dotenv from "dotenv";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthAction } from "./redux/actions/auth.action";
import { Route } from "react-router-dom";
//components
import Navbar from "./components/navbar/Navbar";
import PlusBtn from "./components/helpers/plus_btn/PlusBtn";
import NewDoc from "./components/new_doc/NewDoc";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cookies.get("user")) {
      dispatch(setAuthAction(JSON.parse(Cookies.get("user"))));
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Route path="/" exact>
        <PlusBtn />
      </Route>
      <Route path="/new/doc" exact component={NewDoc}/>
    </div>
  );
}

export default App;
