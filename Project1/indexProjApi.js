const container = document.querySelector("#container");

const request = new XMLHttpRequest();
request.open("Get", "https://restcountries.eu/rest/v2/name/pakistan");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.table(data.languages);
  const htmlData = `<div>
       <img src="${data.flag}"/>
      <h1>${data.name}</h1>
      <h2>${data.capital}</h2>
      <h2>${data.nativeName}</h2>
     <h2>${data.population}</h2>
      <h2>${data.languages[1].nativeName}</h2>
      </div>`;

  container.insertAdjacentHTML("afterbegin", htmlData);
});
