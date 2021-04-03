const container = document.querySelector("#container");

const request = new XMLHttpRequest();
request.open("Get", "https://restcountries.eu/rest/v2/name/pakistan");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  //   In html attribute we give the " "
  const htmlPart = `<div>
     <img src="${data.flag}"/>
     <h1>${data.name}</h1>
  </div>`;
  container.insertAdjacentHTML("afterbegin", htmlPart);
});
