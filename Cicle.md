let num = 0;
while (num<5) {
    console.log(num);
    num++;   
}

let nums = 5;
while (nums) {
    console.log(nums);  
    nums--;
}
let numr = 0;
do {
    console.log(numr);  
    numr++;
} while (numr < 5);

let num = 0;
for (;num < 5; num++) {
    console.log(num);
    if(num == 2) break;
}
console.log(`Work is end , num = ${num}`); 

Homework

Task #1
let x =1;
while (x<=5){
  console.log(x);   
  x++; 
}

for (let x = 1; x <= 5; x++) {
    console.log(x);
}

Task #2

let num = 8;
while (num) {
    console.log(num);
    num--;
}

Task #3
let x = 0;
while (x <3) {
    console.log(`Число: ${x}`);
    x++
}
// Task #4
Firstfor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size <3; size++){
        if (size == 1) {
            break Firstfor;
        }
        console.log(size);
    }
}
