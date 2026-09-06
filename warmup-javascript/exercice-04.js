const courses = ["pain" , "lait" , "riz" , "cafe"] ;
courses.push("sucre");
console.log(courses);


//const courses = ["pain" , "lait" , "riz" , "cafe"] ;
let position = courses.indexOf("lait") ;

 
courses.splice(position , 1);
console.log(courses);



//const courses = ["pain" , "riz" , "cafe" , "sucre"] ;


 console.log(courses.length) ;

 
// const courses = ["pain" , "riz" , "cafe" , "sucre"] ;

for (let i = 0 ; i < courses.length ; i++) {
  let num = courses[i];
  console.log(i + 1  + ". " + num) ;
}






//const courses = ["pain" , "riz" , "cafe" , "sucre"] ;
//console.log(courses.includes("cafe"))
if (courses.includes("cafe") ) {
  console.log("Le cafe est bien dans la liste.") ;
} 
else {
  console.log("non") ;
}
//console.log() ;






//push()

//tzid f lekeher element array

//indexOf()
//tl9a element dyal index

//splice()
//tmse7 element men array

//length
//t3rf 3la 3adad dyal elements

//for + courses[i]

//tdoz 3la 3anasir w te3redhom

//includes()
//tchof wach element kayen


//bonus 

//const courses = ["pain" , "riz" , "cafe" , "sucre"] ;

console.log(courses.sort());
console.log(courses[0]); //affich premier
console.log(courses[courses.length - 1]); //affich la dernier

// length hya che7al men 3onser or element 3endi
// sort() hya t3rf 3la les elements w t3rfhom b ordre alphabétique
// courses[0] hya t3rf 3la l element l awel
// courses[courses.length - 1] hya t3rf 3la l element l a5er
// includes() hya t3rf wach l element kayen f array wla la
// indexOf() hya t3rf 3la l index dyal l element
// splice() hya t3rf 3la l index dyal l element w tms7o
// push() hya t3rf 3la l element w tzido f l a5er dyal l array
// index hya fin kayen dak element or 3onser
