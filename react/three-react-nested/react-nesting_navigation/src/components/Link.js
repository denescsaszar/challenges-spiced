import React from "react";

export function Link({ navigationLink, children }) {
  return (
    <a className="navigation__link" href={navigationLink}>
      {children}
    </a>
  );
}
