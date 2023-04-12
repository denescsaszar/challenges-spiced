import React from "react";

export function Image({ imageSrc, imageAlt }) {
  return <img className="round-image" src={imageSrc} alt={imageAlt} />;
}

export default Image;
