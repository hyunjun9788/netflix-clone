const rootElement = document.getElementById("root");

function createNetflixApp() {
  const top = document.createElement("div");
  const topHeader = document.createElement("div");
  const languageAndLogin = document.createElement("div");
  const header = document.createElement("header");
  const logoImg = document.createElement("img");
  const select = document.createElement("select");
  const option = document.createElement("option");
  const loginButton = document.createElement("button");
  const membershipTitle = document.createElement("div");
  const firstTitle = document.createElement("h1");
  const secondTitle = document.createElement("p");
  const thirdTitle = document.createElement("div");
  const form = document.createElement("form");
  const inputAndButton = document.createElement("div");
  const emailInput = document.createElement("input");
  const startButton = document.createElement("button");
  const membershipDetail = document.createElement("div");
  const popcon = document.createElement("img");
  const detailContent = document.createElement("div");
  const firstDetail = document.createElement("p");
  const secondDetail = document.createElement("p");
  const thirdDetail = document.createElement("p");
  const thirdDetailLink = document.createElement("a");
  logoImg.src = "C:/Users/namhy/Documents/web/netflix/logo1.png";
  logoImg.className = "logo";
  languageAndLogin.className = "languageAndlogin-btn";
  loginButton.className = "login-btn";
  select.className = "select";
  top.className = "top";
  topHeader.className = "topHeader";
  logoImg.className = "logoImg";
  membershipTitle.className = "membershipTitle";
  form.className = "emailForm";
  inputAndButton.className = "email";
  emailInput.className = "email-input";
  startButton.className = "start-button";
  firstTitle.className = "first-title";
  secondTitle.className = "second-title";
  thirdTitle.className = "third-title";
  membershipDetail.className = "membership-detail";
  popcon.className = "popcon";
  detailContent.className = "detail-content";
  firstDetail.className = "first-detail";
  secondDetail.className = "second-detail";
  thirdDetail.className = "third-detail";

  rootElement.appendChild(top);
  top.appendChild(header);
  header.appendChild(topHeader);
  topHeader.appendChild(logoImg);
  topHeader.appendChild(languageAndLogin);
  languageAndLogin.appendChild(select);
  select.appendChild(option);
  option.textContent = "한국어";
  languageAndLogin.appendChild(loginButton);
  loginButton.textContent = "로그인";

  header.appendChild(membershipTitle);
  membershipTitle.appendChild(firstTitle);
  firstTitle.innerHTML =
    "대작 영화와 인기 시리즈, 그리고 게임까지!<br> 월 5,500원으로 시작하세요";
  membershipTitle.appendChild(secondTitle);
  secondTitle.textContent = "지금 바로 가입하세요. 해지는 언제든 가능합니다.";
  membershipTitle.appendChild(thirdTitle);
  thirdTitle.textContent =
    "시청할 준비가 되셨나요?멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.";

  membershipTitle.appendChild(form);
  form.appendChild(inputAndButton);
  inputAndButton.appendChild(emailInput);
  inputAndButton.appendChild(startButton);
  startButton.textContent = "시작하기 >";

  membershipTitle.appendChild(membershipDetail);
  membershipDetail.appendChild(popcon);
  popcon.setAttribute("src", "popcon.jpg");
  membershipDetail.appendChild(detailContent);
  detailContent.appendChild(firstDetail);
  detailContent.appendChild(secondDetail);
  detailContent.appendChild(thirdDetail);
  thirdDetail.appendChild(thirdDetailLink);
  firstDetail.textContent = "5,500원이면 만날 수 있는 넷플릭스.";
  secondDetail.textContent = "광고형 스탠다드 멤버십에 가입하세요.";
  thirdDetailLink.setAttribute("href", "#");
  thirdDetailLink.textContent = "자세히 알아보기";
}

createNetflixApp();
