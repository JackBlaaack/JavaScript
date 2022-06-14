function checkAge(age_1) {
age_1 = Number(age_1);
console.log(typeof(age_1));
if(typeof(age_1) =="number"){
 if(age_1<18){
        console.log("go home");
     }
    
     else if(age_1 >=  18 && age_1 <  61){
        console.log("Welcome");
     }
    
     else if(age_1 >61){
        console.log("Keep calm and look Culture channel");
     }else{
        console.log("Technical work");
     }
}else {
    console.log("Error");
}
}
checkAge('17');
