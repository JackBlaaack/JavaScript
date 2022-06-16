function checkAge(age_1){
    age_1 = Number(age_1);
    console.log(typeof(age_1));
     if(typeof(age_1)=="number" && typeof(age_1=="NaN"){
        
    if(age_1 < 18){
    alert("Go home");
    }
    else if(age_1 >=18 && age_1 <= 61){
        alert("Welcome");
    }
    else if (age_1 > 61){
        alert("Keep calm and look Culture channel");
    }
    }
    else {
        alert("Error");
    }
}
checkAge();
console.log(checkAge(prompt('Enter your age','')));
