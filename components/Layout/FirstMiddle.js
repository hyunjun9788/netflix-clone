class FirstMiddle {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "first-middle";
  }
  Element반환() {
    const firstContent = document.createElement("div");
    firstContent.className = "first-content";
    const firstContentHeader = document.createElement("h1");
    firstContentHeader.className = "first-content-header";
    const firstContentP = document.createElement("p");
    firstContentP.className = "content-p";
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    this.container.appendChild(firstContent);
    firstContent.appendChild(firstContentHeader);
    firstContent.appendChild(firstContentP);

    const image = document.createElement("img");
    image.className = "first-gif";
    image.setAttribute(
      "src",
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
    );
    firstContentHeader.textContent = "TV로 즐기세요";
    firstContentP.textContent =
      "스마트TV,PlayStation,Xbox,Chromecast,Apple TV,블루레이 플레이어 등 다양한 디바이스에서 시청하세요.";

    this.container.appendChild(imageContainer);
    imageContainer.appendChild(image);

    const video = document.createElement("video");
    const source = document.createElement("source");

    imageContainer.appendChild(video);
    video.appendChild(source);

    source.setAttribute(
      "src",
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
    );
    return this.container;
  }
}

export default FirstMiddle;
