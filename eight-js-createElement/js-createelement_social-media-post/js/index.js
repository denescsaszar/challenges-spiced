console.clear();

function handleLikeButtonClick(event) {
  console.log();
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const post = document.createElement("article");
post.classList.add("post");
const paragraph = document.createElement("p");
paragraph.classList.add("post__content");
paragraphtextContent = "Lorem ipsum wefjzbaewkuzfjhabevwjkhdf";
post.appendChild(paragraph);
const button = document.createElement("button");
button.setAttribute("type", "button");
button.innerText = "Click me";
button.addEventListener("click", handleLikeButtonClick);
post.append(button);
document.body.appendChild(post);

console.log(button);

// eppended to the body

document.body.append(post);
console.log(post);
