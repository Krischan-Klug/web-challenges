import { getRandomColor } from "./utils/randomColor.js";
import { createCircle } from "./components/Circle/Circle.js";
import { createSquare } from "./components/Square/square.js";
import { createPentagon } from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const circle = createCircle();

const square = createSquare();

const pentagon = createPentagon();

root.append(circle, square, pentagon);
