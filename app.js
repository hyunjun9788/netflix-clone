import Top from "./components/Layout/Top.js";

const rootElement = document.getElementById("root");

function createNetflixApp() {
  const $Top = new Top();

  rootElement.appendChild($Top.Element반환());
}

createNetflixApp();
