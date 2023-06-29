import { useSelector } from "react-redux";
import { userSelect } from "../../hooks/userSlice";
import Login from "../login/Login";
import Home from "../home/Home";

export default function Autenticated() {
  const user = useSelector(userSelect);

  return <div>{user ? <Home /> : <Login />}</div>;
}
