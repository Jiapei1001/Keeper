import React from "react";
import StarIcon from '@material-ui/icons/Star';

function Header() {
  return (
    <header>
      <h1>
        <StarIcon style={{ color: "#ccff33"}} /> Keeper
      </h1>
    </header>
  );
}

export default Header;
