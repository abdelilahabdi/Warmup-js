const inscription = {
  nom: "",
  email: "aminaexample.com",
  motDePasse: "123",
  age: 17
};
 

function validerInscription(donnees) {

  const erreur = [] ;

 if ( donnees.nom.length < 2 ) {
   erreur.push("Le nom doit contenir au moins 2 caracteres.")
 }

  if ( !donnees.email.includes("@") || !donnees.email.includes(".")) {  // includes kat9ol lina wach dak nes fih or kay7tawi 3la chi haja mo3ayana 

   erreur.push("L'email n'est pas valide") ;


  }


 if (donnees.motDePasse.length < 8 ) {
   erreur.push("Le mot de passe doit contenir au moins 8 caracteres.");
 } 

  if (typeof donnees.age !== "number" || donnees.age <= 18) {
    erreur.push("Vous devez avoir au moins 18 ans.") ;
  }

   

  return {
    valide : erreur.length === 0 ,
    erreur : erreur 
    
  };
}

console.log (validerInscription(inscription)) ;