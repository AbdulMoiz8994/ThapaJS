const textPara = document.querySelector("#jokeLine");
const jokeeBtn = document.querySelector("#clickforNextJoke");

const generateJokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", setHeader)
    .then((res) => res.json())
    .then((data) => {
      textPara.innerHTML = data.joke;
    })
    .catch((error) => console.log(error));
};

jokeeBtn.addEventListener("click", generateJokes);
generateJokes();
