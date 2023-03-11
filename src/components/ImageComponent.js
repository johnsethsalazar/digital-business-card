import React from "react";
import image from "../images/dpwithbg.jpeg"
export default function Image() {
  return (
    <>
      <img src={image} alt="image" className="image-thumbnail border border-dark mb-4 mt-1"/>
    </>
  );
}
