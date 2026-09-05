const temperatures = [-5, 10, 22, 34];




  

function celsiusVersFahrenheit(celsius) {
  return  celsius * 9 / 5 + 32 ;
 
}


function decrireTemperature(celsius) {
  if (celsius < 10) {
   return "Froid" ;
  }

  else if (celsius >= 10 && celsius <= 25) {
    return "Doux" ;
  }

  else if (celsius > 25) {
   return  "Chaud" ;
  }
}

for (let i = 0 ; i < temperatures.length ; i++ ) {
  let temp = temperatures[i] ;

  let fahrenheit = celsiusVersFahrenheit(temp);
  let description = decrireTemperature(temp);


console.log(`celsiusVersFahrenheit(${temp}) -> ${fahrenheit}`);
console.log(`decrireTemperature(${temp}) -> ${description}`);
}
// let f = celsiusVersFahrenheit(temp) ;
// let v = celsiusVersFahrenheit(temp);
// let n = decrireTemperature(temp);
// let i = decrireTemperature(temp);
// let k = decrireTemperature(temp);
                          
                          
