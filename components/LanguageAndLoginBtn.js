import createElement from "../util/createElement.js";

/**
 * 안녕 나는 LanguageAndLoginBtn 야
 * 나는 멍청하게 select랑 login button만 그릴줄 알아
 * 컴포넌트는 멍청해야 잘짠거다. 왜? -> 재사용성, 유연성
 */
class LanguageAndLoginBtn {
  container;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "languageAndlogin-btn";
  }

  Element반환() {
    //select,option
    // const select = document.createElement("select");
    // select.className = "select";

    const select = createElement("select", "select");

    const option = document.createElement("option");
    select.appendChild(option);

    option.textContent = "한국어";

    //button
    // const loginButton = document.createElement("button");
    // loginButton.className = "login-btn";

    const loginButton = createElement("button", "login-btn");

    loginButton.textContent = "로그인";

    this.container.appendChild(select);
    this.container.appendChild(loginButton);

    return this.container;
  }
}

export default LanguageAndLoginBtn;
