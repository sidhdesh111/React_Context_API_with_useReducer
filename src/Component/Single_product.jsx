import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CartState } from "../ContextAPI";

const Single_product = ({ prod }) => {
  const {
    state: { cart },
    product_filter: {
      productrating,
      productInStock,
      productType,
      sort,
      productsearchQuery,
    },
    dispatch,
  } = CartState();

  return (
    <>
      {prod.map((ele, index) => (
        <div key={index} className="product_item">
          <div className="product_image">
            <LazyLoadImage
              src={ele.product_Image}
              alt={ele.product_Name}
              effect="blur"
              loading="lazy"
              className="img"
            />
          </div>
          <div className="product_content">
            <h4>{ele.product_Name}</h4>
            <p>₹{ele.product_price}</p>
            <p>
              Product Available:
              {ele.product_InStock === 0
                ? "Out of Stock"
                : `${ele.product_InStock} Available`}
            </p>
            <p>{ele.product_Type ? "Fast Delivery" : "Not Fast Delivery"}</p>

            <div className="rating">
              <ul className="star_area">
                {[...Array(5)].map((_, starIndex) => (
                  <li key={starIndex}>
                    {ele.product_rating > starIndex ? <FaStar /> : <CiStar />}
                  </li>
                ))}
              </ul>
            </div>

            {cart.some((item) => item.product_id === ele.product_id) ? (
              <button
                onClick={() => {
                  dispatch({ type: "Remove_from_cart", payload: ele });
                }}
                className="btn_remove"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch({ type: "Add_to_cart", payload: ele });
                }}
                className="btn_addcart"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Single_product;
