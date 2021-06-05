const onSubmitFunc = () => {
  const getNumber = document.getElementById("temp").value;
  console.log(getNumber);

  const temp_Selected = document.getElementById("tem_diff");
  // console.log(temp_diff);
  const get_value = tem_diff.options[temp_Selected.selectedIndex].value;
  //  console.log(get_value);

  // for convert temp cel to feh function + formula
  // Math.round connverts ininte if e are getting the decimal number
  let celtofeh = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  //  we make the condition where we will get the value from input and check on the fech and cel
  let result;
  if (get_value === "cel") {
    result = celtofeh(getNumber);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `=${result}&#8457;ahrenheit`;
    console.log(result);
  } else {
    result = fehtoCel(getNumber);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `=${result}&#8451;elsius`;
    console.log(result);
  }
};
