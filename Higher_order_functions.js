// without Higher order functions
// map
 const arr = [1,2,3];
const arr2= [];
for(i=0; i<arr.length; i++) {
    arr2.push(arr[i] ** 2);
}
console.log(arr2); 

Higher Order Functions

const arr = [1,2,3,];
const arr2 = arr.map(function(item) {
    return item **2;
});
console.log(arr2); 

const arr = [1,2,3];
const arr2 = arr.map(item => item **2);
console.log(arr2);

// filter

const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
  ];

  const fullAge = [];
  for(let i = 0; i < persons.length; i++) {
    if(persons[i].age >=18) {
        fullAge.push(persons[i]);
    }
    }
    console.log(fullAge);
