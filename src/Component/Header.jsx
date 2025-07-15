import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import "../Component/Header.css";
import { Link } from "react-router-dom";
import { CartState } from "../ContextAPI";
const Header = () => {
  const {
    state: { cart },
    dispatchfilter
  } = CartState();

  console.log(`header`);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link to={"/"}>
              <div className="logo_area">logo</div>
            </Link>

            <div className="search_area">
              <input type="text" 
              
              onChange={(e)=> {
                dispatchfilter({
                  type:"FILTER_BYSEARCH",
                  payload:e.target.value
                })
              }}

               placeholder="Search For Product" />
            </div>
            <div className="cart_area">
              ({cart.length})
              <Link to={"/cart"}>
                <FaCartPlus className="cart_icon" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
