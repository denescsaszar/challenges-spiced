// Import Functions & Modules
import { JokeSection } from "../components/JokeSection/JokeSection.js";
import { Joke } from "../components/Joke/Joke.js";

// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

async function getJoke() {
  jokeSection.innerHTML = "";

  try {
    const response = await fetch(
      "https://example-apis.vercel.app/api/bad-joke/"
    );
    if (!response.ok) {
      console.log("Bad request");
    } else {
      console.log("Fetch worked");
      const jokesData = await response.json();
      console.log("jokeData", jokesData);

      //   const joke = Joke();
      //   joke.textContent = jokeData.joke;
      //   jokeSection.append(joke);
      jokesData.forEach((jokeData) => {
        const joke = Joke();
        joke.textContent = jokeData.joke;
        jokeSection.append(joke);
      });
    }
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
getJoke();
