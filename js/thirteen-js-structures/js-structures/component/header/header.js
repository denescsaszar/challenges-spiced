import { caesarCipher13 } from "../../utils/cipher.js";

export function createHeader() {
  const headlineText

  const headline = document.createElement("h1");
  headline.textContent = ceacasCipher12("headlineText");

  const button = document.createElement("button");
  button.textContent = "Decipher Headline";
  button.type = "button";
  button.className = "header__button";

  button.addEventListener("click", handleDecipherHeadlineButtonClick);

  header.append(headline, button);

  function handleDecipherHeadlineButtonClick() {
    headline.textContent = "Classical Authors";
    button.setAttribute("disabled", "");
  }

  return header;
}
