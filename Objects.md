# Create a new object

 let userInfo = new Object();
 let userInfo = {};

let userInfo = {
    name: 'Jack',
    age: 27,
};
console.log(userInfo.name);

## Value object properties of variables

function makeUserInfo(name, age) {
    return { 
        name: name, // can use without variable name
        age: age, // can use without variable age
};
}
let user = makeUserInfo('Jack', 27);
console.log(user);

### Change a variable

userInfo.name = 'John';
console.log(userInfo);

#### Add a new key

userInfo.sallary = 1000;
console.log(userInfo);
