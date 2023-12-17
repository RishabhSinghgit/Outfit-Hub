import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart-context";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity, price, imageUrl } = cartItem;
          return (
            <div  className='checkout-header' key={id}>
              <h3>{name}</h3>
              <span className="">{quantity}</span>
              <span className="">{price}</span>
              <img  className='' src={imageUrl} alt={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
