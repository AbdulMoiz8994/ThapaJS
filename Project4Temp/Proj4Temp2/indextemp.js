const tempload=() =>{
    const temp=document.getElementById("temp")
    temp.innerHTML="&#xf2cb;"
    temp.style.color='green'

  window.setTimeout(() =>{
    temp.innerHTML="&#xf2c9;"
    temp.style.color="green"
  },1000)

  window.setTimeout(() =>{
   temp.innerHTML="&#xf2c8;"
   temp.style.color="yellow"
  },2000)

  window.setTimeout(() =>{
    temp.innerHTML="&#xf2c7;"
    temp.style.color="red"
  },3000)


}

tempload()

// This setInterval call every templaod() function after every 4 seconds 
window.setInterval(() =>{
 tempload()   
},4000)