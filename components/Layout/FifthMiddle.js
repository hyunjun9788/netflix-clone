class FifthMiddle {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "fifth-middle";
  }
  Element반환() {
    const qAnda = document.createElement("div");
    qAnda.className = "q-and-a";

    const qAndaHeader = document.createElement("div");
    qAndaHeader.className = "q-and-a-header";

    const qAndaHeaderContent = document.createElement("h1");
    qAndaHeaderContent.textContent = "자주 묻는 질문";

    qAndaHeader.appendChild(qAndaHeaderContent);
    qAnda.appendChild(qAndaHeader);

    const questions = [
      "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
      "넷플릭스란 무엇인가요??",
      "넷플릭스 요금은 얼마인가요?",
      "어디에서 시청할 수 있나요??",
      "멤버십을 해지하려면 어떻게 하나요?",
      "아이들이 넷플릭스를 봐도 좋을까요?",
    ];

    for (const questionText of questions) {
      const button = document.createElement("button");
      button.className = "question";

      const question = document.createElement("span");
      question.textContent = questionText;

      const plusButton = document.createElement("span");
      plusButton.textContent = "+";

      button.appendChild(question);
      button.appendChild(plusButton);

      qAnda.appendChild(button);
    }

    const ready = document.createElement("div");
    ready.id = "ready";
    ready.setAttribute("style", "color:white");
    ready.textContent =
      "시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력해주세요.";

    qAnda.appendChild(ready);
    this.container.appendChild(qAnda);

    const form = document.createElement("form");
    qAnda.appendChild(form);
    const input = document.createElement("input");
    form.appendChild(input);
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "이메일 주소");
    input.className = "second-input";

    const startButton = document.createElement("button");
    form.appendChild(startButton);
    startButton.textContent = "시작하기 >";
    return this.container;
  }
}

export default FifthMiddle;
