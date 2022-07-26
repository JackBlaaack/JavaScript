let greeting = 'Как вас зовут?'
function random(number) {
return Math.ceil(Math.random() * 100);
}
let names = prompt(greeting);
while (names =='' || names == null ) {
names = prompt(greeting);
}
alert(names + '' + ', Я загадал число от 1 до 100');

let number = random(100);
let guess = prompt('Какое число я загадал?');
let numberOfGuesses = 0;

while (guess != number) {
if (guess > number) {
guess = prompt('Много, попробуй ещё!');
numberOfGuesses = numberOfGuesses + 1;
} else {
guess = prompt('Мало, попробуй ещё!');
numberOfGuesses = numberOfGuesses + 1;
}
}
alert('Правильно ты угадал' + ' ' + number +'. тебе понадобилось'+ numberOfGuesses + ' ' + ' попыток');
