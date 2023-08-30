class Bottom {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "bottom";
  }

  Element반환() {
    const phoneNumber = document.createElement("div");
    phoneNumber.className = "phone-number";
    phoneNumber.textContent = "질문이 있으신가요? 문의 전화: ";

    const phoneNumberLink = document.createElement("a");
    phoneNumberLink.href = "tel:080-001-9587";
    phoneNumberLink.textContent = "080-001-9587";
    phoneNumber.appendChild(phoneNumberLink);

    const gridBox = document.createElement("div");
    gridBox.className = "grid-box";

    const grid = document.createElement("ul");
    grid.className = "grid";

    const gridItems = [
      "자주 묻는 질문",
      "고객 센터",
      "계정",
      "미디어 센터",
      "투자 정보",
      "입사 정보",
      "넷플릭스 지원 디바이스",
      "이용 약관",
      "개인정보 처리방침",
      "쿠키설정",
      "회사정보",
      "문의하기",
      "속도테스트",
      "법적 고지",
      "오직 넷플릭스에서",
    ];

    for (const itemText of gridItems) {
      const gridList = document.createElement("li");
      const gridA = document.createElement("a");
      gridA.href = "#";
      gridA.textContent = itemText;
      gridList.appendChild(gridA);
      grid.appendChild(gridList);
    }

    gridBox.appendChild(grid);

    this.container.appendChild(phoneNumber);
    this.container.appendChild(gridBox);

    return this.container;
  }
}

export default Bottom;
