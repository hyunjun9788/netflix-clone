const createElement = (tagName, className) => {
  const element = document.createElement(tagName);

  element.className = className;

  return element;
};

export default createElement;

// const $ = (selector) => {
//     return document.querySelector(selector);
// }

// $(".login-btn")
