class MembershipDetail {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "membership-detail";
  }

  Element반환() {
    const popcornImg = document.createElement("img");
    popcornImg.className = "popcon";
    popcornImg.setAttribute("src", "../popcon.jpg");

    this.container.appendChild(popcornImg);

    const detailContent = document.createElement("div");
    detailContent.className = "detail-content";

    this.container.appendChild(detailContent);

    const firstDetail = document.createElement("p");
    firstDetail.className = "first-detail";
    const secondDetail = document.createElement("p");
    secondDetail.className = "second-detail";
    const thirdDetail = document.createElement("p");
    thirdDetail.className = "third-detail";

    detailContent.append(firstDetail, secondDetail, thirdDetail);

    firstDetail.textContent = "5,500원이면 만날 수 있는 넷플릭스.";
    secondDetail.textContent = "광고형 스탠다드 멤버십에 가입하세요";
    const link = document.createElement("a");
    thirdDetail.appendChild(link);
    link.setAttribute("href", "#");
    link.textContent = "자세히 알아보기";

    //   const popcornImg = createElement(props);
    //   const detailContent = createElement(props);
    //   const detail1 = createElement(props);
    //   const detail2 = createElement(props);
    //   const detail3 = createElement(props);
    //   detailContent.append(detail1, detail2, detail3)

    //   this.container.append(popcornImg, detailContent)

    return this.container;
  }
}

export default MembershipDetail;
