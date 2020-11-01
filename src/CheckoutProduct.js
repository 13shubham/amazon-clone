import React from 'react'
import "easy-star-rating"
import "./CheckoutProduct.css"
import { useStateValue} from "./StateProvider"

function CheckoutProduct({id, title, price, image, rating}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromFunction = () => {
  //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id:id
    });
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt=""/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
        <span>CDN$</span>
        <span>{price}</span>
       </p>
        <div className="checkoutProduct__rating">
        <star-rating stars= "5" rating={rating} class="star"></star-rating>
        </div>
        <button onClick={removeFromFunction}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
