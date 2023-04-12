import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> one </Button>
      <Button> two </Button>
      <Button> three </Button>
      <Button> four </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      Click me!
      {children}
    </button>
  );
}

/*
1. in the `Button` component, receive the `children` prop as parameter; make sure to destructure it.
2. replace the "Click me!" text with the `children` prop (don't forget the curly braces `{}`).
3. in the `App` component, change the `Button` elements from being self-closing to have an opening and closing tag.
4. add text of your choice between the opening and closing tags of the Button elements (use different texts to see any difference in the browser!)

🎉 Congratulations, you can now use the `children` prop to create really flexible components!
*/
