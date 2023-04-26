import React from "react";
import "./styles.css";

/*
Write an Article component and use it to replace the given <div>.
Your component should contain the following parts:
an <article> as a wrapper HTML element with the class article
an <h2> with the class article__title and a text of your choice
a <label> and <input> tag connected with id and htmlFor (!) attributes
an <a> tag with the class article__link as well as text content and href 
attribute of your choice (What about a Wikipedia article?)
*/

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">This a heading</h2>
      <label htmlFor="input-field"></label>
      <input id="input-field"></input>
      <a
        className="article__link"
        href="https://github.com/spiced-academy/savory-web-dev/blob/main/sessions/react-basics/challenges-react-basics.md"
      >
        This is a link to an article of my choice
      </a>
    </article>
  );
}
