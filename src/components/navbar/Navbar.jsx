import { useState } from "react";
import { Hamburguer, Menu, Nav } from "./styles";
import { BsCart } from "react-icons/bs";

import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import Search from "../search/Search";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Nav>
        <Link to="">Exclusive</Link>
        <Menu show={show}>
          <li>
            <Link to="/" onClick={changeShow}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={changeShow}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={changeShow}>
              Contacts
            </Link>
          </li>
          <div>
            <li>
              <Search />
            </li>
            <li>
              <Link to="/cart" onClick={changeShow}>
                <BsCart size={20} />
              </Link>
            </li>
            <li>
              <CiUser size={20} onClick={changeShow} />
            </li>
          </div>
        </Menu>
        <Hamburguer>
          <div className="line1" onClick={changeShow} />
          <div className="line2" onClick={changeShow} />
          <div className="line3" onClick={changeShow} />
        </Hamburguer>
      </Nav>
    </>
  );
}
