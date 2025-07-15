import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CartState } from "../ContextAPI";

const Cart = () => {
  console.log(`Cart`);

  const {
    state: { cart },
    dispatch,
  } = CartState();



  return (
    <div className="container cart_container">
      <div className="cart_div">
        <div className="cart_heading">
          <h2>List of Add to Cart items</h2>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Items No.1</th>
              <th>Items Name</th>
              <th>Items Images</th>
              <th>Items quantity</th>
              <th>Items Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((ele, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ele.product_Name}</td>
                  <td>
                    <img src={ele.product_Image} alt="" />
                  </td>
                  <td>
                    <input
                      type="number"
                      onChange={(e) => {
                        e.target.value > 0
                          ? dispatch({
                              type: "Change_qty",
                              payload: {
                                id: ele.product_id,
                                qty: e.target.value,
                              },
                            })
                          : 1;
                      }}
                      value={ele.qty}
                    />
                  </td>
                  <td>₹ {ele.qty * ele.product_price}</td>

                  <td>
                    <MdDeleteForever
                      style={{ color: "red", fontSize: "32px" }}
                      onClick={() => {
                        dispatch({
                          type: "Remove_from_cart",
                          payload: ele,
                        });
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>
                  ₹
                  {cart.reduce(
                    (acc, curr) => acc + curr.product_price * curr.qty,
                    0
                  )}
                </strong>
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
