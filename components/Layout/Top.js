import MembershipTitle from "../MembershipTitle.js";
import TopHeader from "../TopHeader.js";

class Top {
  container; // Top Element

  /**
   * 생성자는 new에 의해서 호출된다
   * 초기화해주는 함수
   */
  constructor() {
    this.container = document.createElement("div");
    this.container.className = "top";
  }

  Element반환() {
    const header = document.createElement("header");

    const topheader = new TopHeader();
    const membershipTitle = new MembershipTitle();
    header.appendChild(topheader.Element반환());
    header.appendChild(membershipTitle.Element반환());

    this.container.appendChild(header);

    return this.container;
  }
}

export default Top;
