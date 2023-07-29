import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <span>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)}>
          {rating > i ? (
            <AiFillStar fontSize="20px" />
          ) : (
            <AiOutlineStar fontSize="20px" />
          )}
        </span>
      ))}
    </span>
  );
};

export default Rating;
