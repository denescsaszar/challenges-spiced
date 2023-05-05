import { createServer } from "node:http";

// export const server = …

export const server = createServer((request, response) => {
  response.end("Hello [Denes]!");
});

export const startServer = () => {
  server.listen(8000);
};
