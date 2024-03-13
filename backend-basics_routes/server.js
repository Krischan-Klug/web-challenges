import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1") {
    response.end("Shrimp");
  } else if (request.url === "/api/fish/2") {
    response.end("Anemonefish");
  } else {
    response.statusCode = 404;
    response.end("404 - Not found");
  }
});
