import React from "react";
import "../Header/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div className="header">
      {/* header-logo */}

      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-logo"
        className="header__logo"
      />

      {/* header-input-box */}
      <div className="header__search">
        <input type="text" className="header__search_Input" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* header-navbar */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello guest</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
