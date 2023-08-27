import MembershipDetail from "./MembershipDetail.js";

class MembershipTitle {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "membershipTitle";
  }

  Element반환() {
    const 자식1 = document.createElement("h1");
    const 자식2 = document.createElement("p");
    const 자식3 = document.createElement("div");
    const 자식4 = document.createElement("form");
    const 자식5 = new MembershipDetail();

    자식1.className = "first-title";
    자식2.className = "second-title";
    자식3.className = "third-title";
    자식4.className = "emailForm";

    const formDiv = document.createElement("div");
    const emailInput = document.createElement("input");
    const startButton = document.createElement("button");

    formDiv.className = "email";
    emailInput.className = "email-input";
    startButton.className = "start-button";
    this.container.appendChild(자식1);
    this.container.appendChild(자식2);
    this.container.appendChild(자식3);
    this.container.appendChild(자식4);
    this.container.appendChild(자식5.Element반환());

    자식1.innerHTML =
      "대작 영화와 인기 시리즈, 그리고 게임까지!<br> 월 5,500원으로 시작하세요";
    자식2.textContent = "지금 바로 가입하세요. 해지는 언제든 가능합니다.";
    자식3.textContent =
      "시청할 준비가 되셨나요?멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.";

    자식4.appendChild(formDiv);
    formDiv.appendChild(emailInput);
    formDiv.appendChild(startButton);

    startButton.textContent = "시작하기 >";
    return this.container;
  }
}

export default MembershipTitle;
