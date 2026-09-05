

const prenom = "abdelilah" ;
const ville = "taourirt" ;
let age = 25 ;
let estEnFormation = true ;
let status ;





if (age >= 18 ) {
 status = "majeur"
}
else {
  status = "mineur"
}

console.log(`${prenom} , ${age} ans , habite a  ${ville}` );
console.log(`status = ${status}`);
console.log(`Formation en cours : ${estEnFormation}` )

console.log(`prenom -> ${typeof prenom}`);
console.log(`ville -> ${typeof ville}`);
console.log(`age -> ${typeof age}`);
console.log(`estEnFormation -> ${typeof estEnFormation}`);

