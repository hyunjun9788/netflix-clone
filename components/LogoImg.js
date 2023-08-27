class LogoImg {
  container;

  constructor() {
    this.container = document.createElement("img");

    this.container.src = "./logo1.png";

    this.container.className = "logo";
    this.container.className = "logoImg";
  }

  Element반환() {
    return this.container;
  }
}

export default LogoImg;
