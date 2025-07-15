import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const Rating = ({ Rating, onClick }) => {


  return (
    <div>
      <ul className="star_area">
        {[...Array(5)].map((_, index) => {
            
          return (
            <span  key={index} onClick={() => onClick(index+1)}>
              <li >
                {Rating > index ? <FaStar /> : <CiStar />}
              </li>
            </span>
          );
        })}
      </ul>
    </div>
  );
};

export default Rating;
