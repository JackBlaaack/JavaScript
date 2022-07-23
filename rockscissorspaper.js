user_counter = 0;
pc_counter = 0;
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
pc_user = randomInteger(1, 3)

while(true) {
    if(user_counter == 5 || pc_counter == 5) {
        alert(`user: ${user_counter} : pc: ${pc_counter}`)
        break
    }

    user = +prompt("Введите: 1 - камень, 2 - ножницы, 3 - бумага");
    
    if (user > 3 || user < 0) {
        alert("You typed an invalid number, you lose!")
    } else if (user == 0 && pc_user == 2) {
        alert("You win!")
        user_counter++;
        console.log("user: " + user_counter)
    } else if(pc_user == 0 && user == 2){
        alert("You lose")
        pc_counter++;
        console.log("pc: " + pc_counter)
    } else if(pc_user > user){
        alert("You lose")
        pc_counter++
        console.log("pc: " + pc_counter)
    } else if(user > pc_user){
        alert("You win!")
        user_counter++
        console.log("user: " + user_counter)
    } else if(pc_user == user){
        alert("It's a draw")
    }
}

