const jokeData = document.querySelector("#showData");
const buttonClick = document.querySelector("#clickNext");

const getData = async () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  const fethData = await fetch("https://icanhazdadjoke.com", setHeader);
  const json = await fethData.json();
  jokeData.innerHTML = json.joke;
  //   console.log(json);
};

buttonClick.addEventListener("click", getData);
getData();
