import { App } from "../App/App.js";

// The render function renders the app to the DOM
export function render() {
  const root = document.querySelector("#root");
  root.append(App());
}
