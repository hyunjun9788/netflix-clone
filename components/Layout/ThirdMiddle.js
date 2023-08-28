class ThirdMiddle {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "third-middle";
  }
  Element반환() {
    const thirdContent = document.createElement("div");
    thirdContent.className = "third-content";
    const thirdContentHeader = document.createElement("h1");
    thirdContentHeader.className = "third-content-header";
    const thirdContentP = document.createElement("p");
    thirdContentP.className = "content-p";
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    this.container.appendChild(thirdContent);
    thirdContent.appendChild(thirdContentHeader);
    thirdContent.appendChild(thirdContentP);

    const image = document.createElement("img");
    image.className = "third-gif";
    image.setAttribute(
      "src",
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
    );
    thirdContentHeader.textContent = "어린이 전용 프로필을 만들어 보세요";
    thirdContentP.textContent =
      "스마트TV,PlayStation,Xbox,Chromecast,자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다. TV,블루레이 플레이어 등 다양한 디바이스에서 시청하세요.";

    this.container.appendChild(imageContainer);
    imageContainer.appendChild(image);

    image.setAttribute(
      "src",
      "https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdl4VeWgVycbbzJBV1KbIpMScxU_I4h6uTvNRpFab-65jsTTqI0V-g-4Jq4CLaIVqx-wbKAwA_Ee8KhZyTb0SFJ5tK2mifI-GYEB.png?r=15b"
    );
    return this.container;
  }
}

export default ThirdMiddle;
