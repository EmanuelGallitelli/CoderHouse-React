import cartImage from "../Assets/cart3.svg"
import { NavLink } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext, useState, useEffect } from 'react'

function CartWidget() {
  const { cart,cartUpdate} = useContext(CartContext)
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(cart.length)
  }, [cartUpdate])
  return (
    <NavLink to={`/cart`} > <button type="button" className="inline-flex relative items-center p-3 
      text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 ">
      <img className="h-9 mx-4 cursor-pointer" src={cartImage}></img>
      {cartLength > 0 ?
        <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6
          text-xs font-bold text-white bg-red-500 rounded-full border-1 border-white dark:border-gray-900">{cartLength}</div>
        : <></>}
    </button></NavLink>



  );
}

export default CartWidget;
