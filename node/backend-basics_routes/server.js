import { createServer } from "node:http";

// export const server = …

export const server = createServer((request, response) => {
  switch (request.url) {
    case "/api/fish/1":
      response.end("Shrimps");
      break;
    case "/api/fish/2":
      response.end("Mondfish");
      break;
    default:
      response.end("404 Not Found");
      break;
  }
});
