import "./Product.css"
import "easy-star-rating"
import React from 'react'
import { useStateValue} from "./StateProvider"

function Product({id, title, image, price, rating}) {
  const [{ basket }, dispatch] = useStateValue(); 
  const addToBasket = ()=> {
    //Add item to basket by dispatching object:
    dispatch({
      type: "ADD_TO_BASKET",
      item: { //if key equal to value then you can keep only key below
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  };

  return (
    <div className="product">
      <div className="product__info">
      <p>{title}</p>
      <p className="product__price">
        <span>CDN$</span>
        <span>{price}</span>
      </p>
      <div className="product__rating">
        <star-rating stars= "5" rating={rating} class="star"></star-rating>
      </div>
      </div>
      <img src={image} alt=""/>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
