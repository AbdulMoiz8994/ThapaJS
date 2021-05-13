const onSubmitFunc=() =>{
    const getNumber=document.getElementById("temp").value
    console.log(getNumber);

    const temp_Selected=document.getElementById("tem-diff")
    // console.log(temp_diff);
    const valueTemp=tem-diff.options[temp_Selected.selectedIndex].value
   console.log(valueTemp);

const celToFah=(cel) =>{
   let fahrenhit= Math.round((cel * 9/5) + 32)
   return fahrenhit
}

   let result;
if(valueTemp == 'cel'){
    result=celToFah(getNumber)
     document.getElementById('resultContainer').innerHTML=` ${result} &#8457;ahrenheit`
}

}