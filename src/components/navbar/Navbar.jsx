import { useState } from "react";
import { Hamburguer, Menu, Nav } from "./styles";
import { BsCart } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
          <div>
            <li>
              <input type="text" placeholder="What are you looking for ?" />
              <button>
                <RiSearch2Line size={15} />
              </button>
            </li>
            <li>
              <Link to="/cart">
                <BsCart size={20} />
              </Link>
            </li>
            <li>
              <CiUser size={20} />
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
