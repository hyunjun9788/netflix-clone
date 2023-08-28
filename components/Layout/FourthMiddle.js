class FourthMiddle {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "fourth-middle";
  }
  Element반환() {
    const fourthContent = document.createElement("div");
    fourthContent.className = "fourth-content";
    const fourthContentHeader = document.createElement("h1");
    fourthContentHeader.className = "fourth-content-header";
    const fourthContentP = document.createElement("p");
    fourthContentP.className = "content-p";
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const image = document.createElement("img");
    image.className = "fourth-gif";
    image.setAttribute(
      "src",
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
    );
    fourthContentHeader.textContent = "어린이 전용 프로필을 만들어 보세요";
    fourthContentP.textContent =
      "스마트TV,PlayStation,Xbox,Chromecast,자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다. TV,블루레이 플레이어 등 다양한 디바이스에서 시청하세요.";

    this.container.appendChild(imageContainer);
    imageContainer.appendChild(image);
    this.container.appendChild(fourthContent);
    fourthContent.appendChild(fourthContentHeader);
    fourthContent.appendChild(fourthContentP);

    return this.container;
  }
}

export default FourthMiddle;
