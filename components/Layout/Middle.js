// import MembershipTitle from "../MembershipTitle.js";
import FirstMiddle from "./FirstMiddle.js";
import SecondMiddle from "./SecondMiddle.js";
import ThirdMiddle from "./ThirdMiddle.js";
class Middle {
  container; // Top Element

  /**
   * 생성자는 new에 의해서 호출된다
   * 초기화해주는 함수
   */
  constructor() {
    this.container = document.createElement("div");
    this.container.className = "middle";
  }

  Element반환() {
    const firstMiddle = new FirstMiddle();
    const secondMiddle = new SecondMiddle();
    const thirdMiddle = new ThirdMiddle();

    // const fourthMiddle = new FourthMiddle();
    // const fifthMiddle = new FourthMiddle();

    this.container.appendChild(firstMiddle.Element반환());
    this.container.appendChild(secondMiddle.Element반환());
    this.container.appendChild(thirdMiddle.Element반환());
    // this.container.appendChild(fourthMiddle);
    // this.container.appendChild(fifthMiddle);

    return this.container;
  }
}

export default Middle;
