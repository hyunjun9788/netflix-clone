import Top from "./Layout/Top.js";

class App {
  container;

  constructor() {
    this.container = document.getElementById("root");
  }

  Element반환() {
    const $Top = new Top();

    this.container.appendChild($Top.Element반환());

    return this.container;
  }
}

export default App;
