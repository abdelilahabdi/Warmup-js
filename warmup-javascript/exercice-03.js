
for (let i = 10 ; i >= 1 ; i--) {
  console.log(i) ;
}

console.log("decollage");



let somme = 0 ;
for (let i = 1 ; i <= 100 ; i++) {
  
  somme = somme + i ;
}

console.log(somme) ;




for (let i = 1 ; i <= 20 ; i++ ) {
  let nombre = i ;
  if (nombre % 2 === 0){
      //console.log(nombre);
    process.stdout.write(nombre.toString() + " ");
  }
   
}


let i = 10 ;
while (i >= 1){
  process.stdout.write(i + " ");
  i-- ;
}
console.log("decollage");