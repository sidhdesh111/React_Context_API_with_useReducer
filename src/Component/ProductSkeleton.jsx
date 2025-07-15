// ProductSkeleton.jsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="product_item">
          <div className="product_image">
            <Skeleton height={200} width="100%" />
          </div>
          <div className="product_content">
            <h4><Skeleton width={120} /></h4>
            <p><Skeleton width={80} /></p>
            <p><Skeleton width={150} /></p>
            <p><Skeleton width={100} /></p>
            <div className="rating">
              <Skeleton width={100} height={20} />
            </div>
            <Skeleton height={36} width={120} style={{ marginTop: "10px" }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSkeleton;
