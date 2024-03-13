import { createServer } from "node:http";

const name = "Krischan";

// export const server = …
export const server = createServer((request, response) => {
  console.log(request.method, request.url);
  response.statusCode = 200;
  response.end(`Hello, ${name}`);
});
