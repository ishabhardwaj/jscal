

function calculate(data) {
  switch (data) {
    case "AC":
      input.innerHTML = "";
      output.innerHTML = 0;
      break;
    case "C":
      input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
      output.innerHTML = math.evaluate(`${input.innerHTML}`) === undefined ? 0 : math.evaluate(`${input.innerHTML}`);
      break;
    case "=":
	  let ans = math.evaluate(`${input.innerHTML}`) === Infinity ? 0 : math.evaluate(`${input.innerHTML}`);  
  
      if(ans===-Infinity){
        output.innerHTML=0
      }
      if(ans===NaN){
        output.innerHTML=0
      }
      output.innerHTML=ans.toFixed(6);      
      break;

    default:
      input.innerHTML += data;
  }
}
