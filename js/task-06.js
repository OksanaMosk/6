const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == inputEl.getAttribute("data-length")) {
    inputEl.classList.add("valid");
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("invalid");
    }
  } else {
    inputEl.classList.add("invalid");
  }
});
