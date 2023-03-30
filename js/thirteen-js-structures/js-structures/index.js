import { authors } from "./utils/authors.js";
import { caesarCipher13 } from "./utils/cipher.js";
import { createHeader } from "./components/header/header.js";
import { createCard } from "./components/card/card.js";
import { name, surname, age, hello } from "./utils/others.js";


/** Get root element */

const root = document.querySelector("#root");

/** Header */

const header = createHeader();
root.append(header);

/** Main: Author Cards */

authors.forEach(author) => {
const card = createCard (author);
root.append(card);
});

