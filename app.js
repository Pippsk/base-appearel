const input = document.querySelector(".email input");
const errorIcon = document.querySelector(".error_icon");
const errorMsg = document.querySelector(".error_msg");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = input.value;

  // check if it is a valid email
  if (!validateEmail(emailValue)) {
    form.classList.add("red_border");
    errorIcon.classList.add("visible");
    errorMsg.classList.add("visible");
  } else {
    form.classList.remove("red_border");
    errorIcon.classList.remove("visible");
    errorMsg.classList.remove("visible");
    form.classList.add("succes");
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
