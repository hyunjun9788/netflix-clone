import Top from "./Layout/Top.js";
import Middle from "./Layout/Middle.js";
import Bottom from "./Layout/Bottom.js";
class App {
  container;

  constructor() {
    this.container = document.getElementById("root");
  }

  Element반환() {
    const $Top = new Top();
    const $Middle = new Middle();
    const $Bottom = new Bottom();
    this.container.appendChild($Top.Element반환());
    this.container.appendChild($Middle.Element반환());
    this.container.appendChild($Bottom.Element반환());
    return this.container;
  }
}

export default App;
