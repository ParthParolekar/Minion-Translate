const input = document.querySelector("#text-area");
const translateBtn = document.querySelector(".translate-btn");
const translation = document.querySelector(".translation");
let url = "https://api.funtranslations.com/translate/minion.json";

translateBtn.addEventListener("click", translate);

function serverUrl(text) {
  return encodeURI(url + "?" + "text=" + text);
}

function translate() {
  const inputText = input.value;

  fetch(serverUrl(inputText))
    .then((response) => response.json())
    .then((data) => {
      translation.innerText = data.contents.translated;
    })
    .catch((error) => {
      alert("Oops! An Error occured. Please try again in a few minutes");
    });
}
