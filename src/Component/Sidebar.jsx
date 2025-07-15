import React from "react";
import { useMultiIdObject } from "../Custom_hooks";
import Rating from "./Rating";
import { CartState } from "../ContextAPI";

const Sidebar = () => {
  console.log(`Sidebar`);

  const Input_id = useMultiIdObject([
    "radio1",
    "radio2",
    "checkbox1",
    "checkbox2",
  ]);

  const {
    state: { cart },
  } = CartState();

  const {
    state,
    product_filter: { productrating, productInStock, productType, sort },
    dispatchfilter,
  } = CartState();

  return (
    <div className="sidebar">
      <div className="sidebar_area">
        <h2>Filter Product</h2>
        <div className="input_radio">
          <input
            type="radio"
            onChange={() => {
              dispatchfilter({
                type: "SORT_BY_PRICE",
                payload: "LowtoHigh",
              });
            }}
            checked={sort === "LowtoHigh"}
            id={Input_id.radio1}
          />
          <label htmlFor={Input_id.radio1}>Ascendending Order</label>
        </div>
        <div className="input_radio">
          <input
            type="radio"
            onChange={() => {
              dispatchfilter({
                type: "SORT_BY_PRICE",
                payload: "HighToLow",
              });
            }}
            checked={sort === "HighToLow"}
            id={Input_id.radio2}
          />
          <label htmlFor={Input_id.radio2}>Descending Order</label>
        </div>
        <div className="input_checkbox">
          <input
            type="checkbox"
            onChange={() =>
              dispatchfilter({
                type: "FILTER_STOCK",
              })
            }
            checked={productInStock}
            id={Input_id.checkbox1}
          />
          <label htmlFor={Input_id.checkbox1}>Only Available Stocks</label>
        </div>
        <div className="input_checkbox">
          <input
            type="checkbox"
            onChange={() =>
              dispatchfilter({
                type: "FILTER_BYTYPE",
              })
            }
            checked={productType}
            id={Input_id.checkbox2}
          />
          <label htmlFor={Input_id.checkbox2}>Fast Delivery Only</label>
        </div>
        <div className="rating">
          <h2>Rating:</h2>
          <Rating
            Rating={productrating}
            onClick={(i) =>
              dispatchfilter({
                type: "FILTER_BYRATING",
                payload: i,
              })
            }
          />
        </div>
        <div className="sidebar_btn_area">
          <button
            onClick={() =>
              dispatchfilter({
                type: "RESET_FILTER",
              })
            }
            className="btn-clear"
          >
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
