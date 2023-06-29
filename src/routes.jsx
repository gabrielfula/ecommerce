import { createBrowserRouter } from "react-router-dom";
import Main from "./components/mainpage/Main";
import Home from "./pages/home/Home";
import Eletronics from "./pages/eletronics/Eletronics";
import Joias from "./pages/joias/Joias";
import Men from "./pages/mens/Men";
import Women from "./pages/women/Women";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Busca from "./pages/search/Busca";
import Login from "./pages/login/Login";
import Autenticated from "./pages/Autenticated/Autenticated";
import User from "./pages/user/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Autenticated />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/eletronic",
        element: <Eletronics />,
      },
      {
        path: "/joias",
        element: <Joias />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search",
        element: <Busca />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
