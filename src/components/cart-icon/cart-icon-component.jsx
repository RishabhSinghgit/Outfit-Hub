import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
  const handleCart = () => setIsCartOpen(!isCartOpen);
  
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={handleCart} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
