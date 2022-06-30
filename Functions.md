// Объявление функции 

function showMessage() {
    console.log('hello');

}
showMessage();

// Вложенность и видимость функции

function getSumm(){
    let numOne, numTwo;
    function getNumOne() {
numOne = 1;
    }
    function getNumTwo() {
        numTwo = 2;
}
getNumOne();
getNumTwo();   

let numSumm = numOne + numTwo;
console.log(numSumm);
}
getSumm(); 

// Аргументы 

function calcSumm(numOne, numTwo) {
    console.log(`Переменная numOne: ${numOne}`);
    console.log(`Переменная numTwo: ${numTwo}`);

    let numSumm = numOne + numTwo;
    console.log(`Сумма:${numSumm}`);
}
calcSumm(1500, 253);

Functions-callback

function calcSumm(numOne, numTwo, more, less) {

let numSumm = numOne + numTwo; 

if (numSumm > 3) {
    more();
} else {
 less();
}
}

function showMoreMessage() {
    console.log('Больше чем 3');

}
function showLessMessage() {
    console.log('меньше чем 3');
    
}
calcSumm(1, 3, showMoreMessage, showLessMessage);

return result

function calcSumm(numOne, numTwo) {
    let numSumm = numOne + numTwo;
    return numSumm;   // дальше код не выполянется 
}
 let result= calcSumm(1 ,2);
 console.log(`Сумма: ${result}`);

 recurse

 function calcSumm(numOne, numTwo) {
    if(numTwo ==1) {
        return numOne;
    
    } else {
        return numOne * calcSumm(numOne, numTwo -1);
    }
}
console.log(calcSumm(2,3));

// Arrow Functions

let getMessage = (text, name) => text + ',' + name + '!';
console.log(getMessage('Hi', 'Vasya'));
    
let getMessages = (text, name) => {
    let message = text + ',' + name + '!'; 
    return message;
};
console.log(getMessages('Hi', 'Vasya'));
