const panier = [
  { nom: "Souris", prix: 150, quantite: 2 },
  { nom: "Casque", prix: 400, quantite: 1 },
  { nom: "Tapis", prix: 60, quantite: 3 },
  { nom: "Webcam", prix: 520, quantite: 1 }
];

// map hew push katkherej dak value li bghit 
const noms = panier.map(article => article.nom) ;
console.log(noms) ;



// const panier = [
//   { nom: "Souris", prix: 150, quantite: 2 },
//   { nom: "Casque", prix: 400, quantite: 1 },
//   { nom: "Tapis", prix: 60, quantite: 3 },
//   { nom: "Webcam", prix: 520, quantite: 1 }
// ];

const total = panier.map  (article => {
  return {
  nom :  article.nom , total : article.prix * article.quantite
  }
})
console.log(total) ;



// const panier = [
//   { nom: "Souris", prix: 150, quantite: 2 },
//   { nom: "Casque", prix: 400, quantite: 1 },
//   { nom: "Tapis", prix: 60, quantite: 3 },
//   { nom: "Webcam", prix: 520, quantite: 1 }
// ];

const max = panier.filter (article => article.prix > 100) .map(article => article.nom) ;
console.log(max) ;





// const panier = [
//   { nom: "Souris", prix: 150, quantite: 2 },
//   { nom: "Casque", prix: 400, quantite: 1 },
//   { nom: "Tapis", prix: 60, quantite: 3 },
//   { nom: "Webcam", prix: 520, quantite: 1 }
// ];

const calcul = panier.reduce ((acc , article) => {
  acc = acc + (article.prix * article.quantite )
  return acc 
}, 0 );
console.log(calcul) 



// const panier = [
//   { nom: "Souris", prix: 150, quantite: 2 },
//   { nom: "Casque", prix: 400, quantite: 1 },
//   { nom: "Tapis", prix: 60, quantite: 3 },
//   { nom: "Webcam", prix: 520, quantite: 1 }
// ];

const calcull = panier.reduce ((acc , article) => {
  acc = acc +  article.quantite 
  return acc 
}, 0 );
console.log(calcull) 




