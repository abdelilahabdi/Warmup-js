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