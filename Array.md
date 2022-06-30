// Create a new array
let arr = [
    'Jack',
    {
        type: 'JS',
        age: 27
    },
    true ,
    function () {
        console.log('Hi, I am Jack!');
    }
];

console.log(arr); // [ 'Jack', { type: 'JS', age: 27 }, true, [Function (anonymous)] ]
console.log(arr[0]);  // Jack
console.log(arr[1].type); // JS
arr[3](); // Hi, I am Jack!

 // length of the array
console.log(arr.length);

// Access to the array
let arrNew = arr
 arrNew.length = 3;
console.log(arrNew);

// Add element to the array
arrNew[3] = 'John';
console.log(arrNew); 

// Methods of the array

// Method push - add element at the end of the array

arrNew.push('David', 'Nina');
console.log(arrNew);

// Method shift - delete the first element of the array

arrNew.shift();
console.log(arrNew);
 // Method pop - delete the last element of the array

 arrNew.pop();
 console.log(arrNew);

 // Method unshift - add element to the begining of the array
 arrNew.unshift('Jack');
 console.log(arrNew);
