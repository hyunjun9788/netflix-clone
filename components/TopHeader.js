import LanguageAndLoginBtn from "./LanguageAndLoginBtn.js";
import LogoImg from "./LogoImg.js";

class TopHeader {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "topHeader";
  }

  Element반환() {
    const 자식1 = new LanguageAndLoginBtn();
    const 자식2 = new LogoImg();

    this.container.appendChild(자식2.Element반환());
    this.container.appendChild(자식1.Element반환());

    return this.container;
  }
}

export default TopHeader;
