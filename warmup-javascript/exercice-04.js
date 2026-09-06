const courses = ["pain" , "lait" , "riz" , "cafe"] ;
courses.push("sucre");
console.log(courses);


//const courses = ["pain" , "lait" , "riz" , "cafe"] ;
let position = courses.indexOf("lait") ;

 
console.log(courses.splice(position));
