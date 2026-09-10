const commandes = [
 { montant: 150, statut: "standard" },
 { montant: 620, statut: "standard" },
 { montant: 1200, statut: "premium" }
];

// lwla montant syal object  nom var
// montant tanya dyal parameter nom element
// return 

function calculerCommande(montant, statut) {


let livraison = 30 ;
let pourcentageRemise = 0 ;

  
    if (montant < 200) {
       pourcentageRemise = 0 ;
      
    }

  else if (montant >= 200 && montant <= 499 ) {
    // pourcentageRemise = 0.05 ;
    pourcentageRemise = 5 ;
    
  }

  else if (montant >= 500 && montant <= 999) {
   // pourcentageRemise = 0.1 ;
    pourcentageRemise = 10 ;
  }


  // else if (montant >= 1000) {
  else {
     //pourcentageRemise = 0.15 ;
    pourcentageRemise = 15 ;
   }

    if (statut === "premium") {
    pourcentageRemise = pourcentageRemise + 5 ;
  }


  if (pourcentageRemise > 20) {
    pourcentageRemise = 20 ;
  }

  let remise = montant * pourcentageRemise / 100 ;
  remise = Number(remise.toFixed(2));
  let totalApresRemise = montant - remise ;
  totalApresRemise = Number(totalApresRemise.toFixed(2));


  
  if (totalApresRemise >= 300) {
    livraison = 0 ;
  }


  let totalAPayer = totalApresRemise + livraison ;
  totalAPayer = Number(totalAPayer.toFixed(2)); 

  //totalApresRemise = Number(totalApresRemise.toFixed(2));
  // totalAPayer = Number(totalAPayer.toFixed(2));
  return {montant : montant ,
          pourcentageRemise : pourcentageRemise ,
          totalApresRemise : totalApresRemise ,
          remise : remise ,
          livraison : livraison ,
          totalAPayer : totalAPayer 
         } ;

  
  }

for (let i = 0 ; i < commandes.length ; i++) {
    console.log(calculerCommande(commandes[i].montant,
                                commandes[i].statut));
  }

// console.log(calculerCommande(150, "standard"))
// console.log(calculerCommande(620, "standard"))
// console.log(calculerCommande(1200, "premium"))


