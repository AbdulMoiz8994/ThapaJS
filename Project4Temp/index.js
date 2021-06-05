
// via templaod function we can call at a time to fucntion
// .innerHTML we can pdate replace or put the value icon etch in our tag via first etting id
const tempload=() =>{
  const temp=document.getElementById("temp")  
  temp.innerHTML='&#xf2cb;'
  temp.style='white'

  window.setTimeout(() => {
      temp.innerHTML='&#xf2ca;'
      temp.style.color="#32CD32"

  },1000)

  window.setTimeout(() => {
    temp.innerHTML='&#xf2c9;'
    // we can add the css in Js
    temp.style.color="#32CD32"
},2000)

window.setTimeout(() => {
    temp.innerHTML='&#xf2c8;';
    temp.style.color="yellow"
},3000)

window.setTimeout(() => {
    temp.innerHTML='&#xf2c7;'
    temp.style.color="#d63031"
},4000)


}

tempload()
// /after runing this below setInterval function it will re-render our tempload function 
window.setInterval(() =>{
    tempload()
},5000)
