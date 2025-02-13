
import React from "react"


const Header = ( {cartCount}) => {

    return(
        <header>
        <h1>E-Commerce</h1>
        <div className="cart-icon">
          🛒 {cartCount}
        </div>
      </header>
    )
}

export default Header