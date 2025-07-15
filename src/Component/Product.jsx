import React, { Suspense, lazy, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { CartState } from "../ContextAPI";

import "react-loading-skeleton/dist/skeleton.css";
import ProductSkeleton from "./ProductSkeleton";

const Single_product = lazy(() => import("./Single_product"));

const Product = () => {
  const {
    state,
    product_filter: {
      productrating,
      productInStock,
      productType,
      sort,
      productsearchQuery,
    },
  } = CartState();
  const product = state.product;

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = product.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.product_Image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => {
        setImagesLoaded(true);
      });
  }, [product]);

  console.log(
    productrating,
    productInStock,
    productType,
    sort,
    productsearchQuery
  );

  const filter_product = () => {
    let sorted_product = product;
    if (sort) {
      sorted_product = sorted_product.sort((a, b) => {
        return sort === "HighToLow"
          ? b.product_price - a.product_price
          : a.product_price - b.product_price;
      });
    }
    if (productInStock) {
      sorted_product = sorted_product.filter(
        (prod) => prod.product_InStock > 0
      );
    }
    if (productType) {
      sorted_product = sorted_product.filter(
        (prod) => prod.product_Type == true
      );
    }

    if (
      typeof productsearchQuery === "string" &&
      productsearchQuery.trim().length > 0
    ) {
      const search = productsearchQuery.trim().toLowerCase();
      sorted_product = sorted_product.filter(
        (prod) =>
          typeof prod.product_Name === "string" &&
          prod.product_Name.toLowerCase().includes(search)
      );
    }

    if (productrating) {
      sorted_product = sorted_product.filter((ele) => {
        return ele.product_rating <= productrating;
      });
    }

    return sorted_product;
  };

  console.log(filter_product());

  return (
    <div className="container">
      <div className="product_area">
        <Sidebar />
        <div className="product">
          <h2>Product Data</h2>
          <div className="product_items">
            {imagesLoaded ? (
              <Suspense fallback={<div>Loading component...</div>}>
                {filter_product().length > 0 ? (
                  <Single_product prod={filter_product()} />
                ) : (
                  <div>No products found matching your search.</div>
                )}
              </Suspense>
            ) : (
              <ProductSkeleton count={product.length} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
