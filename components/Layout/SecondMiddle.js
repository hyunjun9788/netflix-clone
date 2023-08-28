class SecondMiddle {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "second-middle";
  }
  Element반환() {
    const secondContent = document.createElement("div");
    secondContent.className = "second-content";
    const secondContentHeader = document.createElement("h1");
    secondContentHeader.className = "second-content-header";
    const secondContentP = document.createElement("p");
    secondContentP.className = "content-p";
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const image = document.createElement("img");
    image.className = "first-gif";
    image.setAttribute(
      "src",
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
    );
    secondContentHeader.textContent = "어디서나 자유롭게 시청하세요";
    secondContentP.textContent =
      "각종 영화와 시리즈를 스마트폰,태블릿,노트북,TV에서 무제한으로 스트리밍하세요.";

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
    this.container.appendChild(secondContent);
    secondContent.appendChild(secondContentHeader);
    secondContent.appendChild(secondContentP);

    return this.container;
  }
}

export default SecondMiddle;
