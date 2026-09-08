const titre = " Mon Premier Projet MERN ";


function genererSlug(titre) {
  titre = titre.trim(); // remove espace en start et fin 

  const mots = [] ;

  const mor = titre.split(" "); //ne9esem string l des partie 


  for (let i = 0 ; i < mor.length ; i++) {
    if (mor[i] !== "") { // ignore espace li kaykhrjo men espace li m3awda
      mots.push(mor[i]) ;  //add 
    }
  }

  return mots.join("-").toLowerCase() ; // nzid bin klma w klma -
}

console.log(genererSlug(titre));  



const phrase = "Le JavaScript est la base du stack MERN";

function compterMots(phrase) {
  return phrase.split(" ").length;  // fach bghiw reje3o 9ima value ndiro return 
  // swel chat fer9 bin return w 3lch kandiroha wach fach tkon tkherej valuer number 

  
}
console.log(compterMots(phrase)) ; 






const nomComplet = "amina el idrissi";

function initiales(nomComplet) {
  
  const noms = nomComplet.split(" ") ;
  

  let result = "" ;

  
  for (let i = 0 ; i < noms.length ; i++ ) {
     
      result = result + noms[i][0].toUpperCase() + "." ;
    
  }
  return result ;
}

console.log(initiales(nomComplet));




