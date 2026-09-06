const produit = {
  nom: "Clavier mecanique",
  prix: 450,
  stock: 12,
  categorie: "Informatique"
};


 
process.stdout.write(`${produit.nom} - `);
process.stdout.write(`${produit.prix} DH - `);
process.stdout.write(`${produit.stock} en stock - `);
process.stdout.write(`(${produit.categorie} )`);

  


// const produit = {
//   nom: "Clavier mecanique",
//   prix: 450,
//   stock: 12,
//   categorie: "Informatique"
// };


(produit.prix = produit.prix * 1.10) ;
console.log(`nouveau prix ${produit.prix}`) ;




// const produit = {
//   nom: "Clavier mecanique",
//   prix: 450,
//   stock: 12,
//   categorie: "Informatique"
// };


produit.enPromotion = false ;
  
console.log(produit) ;


  
// const produit = {
//   nom: "Clavier mecanique",
//   prix: 450,
//   stock: 12,
//   categorie: "Informatique"
// };


for (let key in produit) { //key hewa li ydor 3lihom w ghadi ydekhlna l product
  let value = produit[key] ; // prodt dekhelna fihom key li dar 3lihom
  console.log(`${key} : ${value}`) ;
}


const produit = {
  nom: "Clavier mecanique",
  prix: 450,
  stock: 12,
  categorie: "Informatique"
};


function estDisponible(produit) {
  if(produit.stock > 0) {
    return true ;
  }
  else {
    return false ;
  }
}
console.log(estDisponible(produit)) ;







