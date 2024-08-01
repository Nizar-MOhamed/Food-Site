import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, RemoveFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const renderCartItems = (item) => {
    const cartItemsArray = Object.keys(cartItems);

    if (!cartItemsArray.length) return null;

    if (cartItems[item._id] > 0) {
      return (
        <div key={item._id}>
          <div className="cart-items-title cart-items-item">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>${item.price * cartItems[item._id]}</p>
            <p onClick={() => RemoveFromCart(item._id)} className="cross">
              X
            </p>
          </div>
          <hr />
        </div>
      );
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Titles</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map(renderCartItems)}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
            <button onClick={() => navigate("/order")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text " placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
