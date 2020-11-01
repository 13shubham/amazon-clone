import React from 'react'
import "./Header.css"
import {Link, useHistory} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue} from "./StateProvider"

//dispatch add it into the basket or pul it from the basket
function Header() {
  const [{ basket }] = useStateValue(); // from reducer we have
  console.log(basket);
  
  return (
    <nav className="header">
      {/*logo on the left --> img */}
      <Link to="/">
       <img 
        className="header__logo" 
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      </Link>
      {/*search box*/}
      <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header_searchIcon"/>
      </div>
      {/*3 Links*/}
      <div className="header__nav">
        {/*1st Link*/}
         <Link to="login" className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Hello Shubham</span>
          <span className="header__optionLineTwo">Sign In</span>
          </div>
         </Link>
        {/*2nd Link*/}
        <Link to="login" className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
          </div>
         </Link>
        {/*3rd Link*/}
        <Link to="login" className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
          </div>
         </Link>
      {/*4th Link*/}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* basket icon */}
          <ShoppingBasketIcon/>
          {/*Number of items */} 
  <span className=" header__optionLineTwo header__optionBasketCount">{basket?.length}</span>

        </div>
      </Link>
      </div>
      {/*basket icon with number*/}
    </nav>
  )
}

export default Header
