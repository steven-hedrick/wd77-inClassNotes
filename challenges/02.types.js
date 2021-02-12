/* BRONZE

Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.

*/

let obj = {
    str: 'ABCD',
    num: 35,
    bool: true,
    arr: [1, 'abcd',false,20],
    objTwo: {
        one: 'string'
    },
}

console.log(typeof obj.str);


/* SILVER

Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'

*/

// console.log(obj.str);
let typeValue = typeof obj.str;
// console.log(typeValue);

switch(typeof obj.boo) {
    case 'string':
        console.log('string');
        break;
    case 'number':
        console.log('number');
        break;
    case 'boolean':
        console.log('boolean');
        break;
    case 'object':
        console.log('object');
        break;
    default: console.log('what are you');
}

let value = typeof obj.str;

if(value === 'string') {
    console.log('This value is a string');
}   else if (value === 'number') {
    console.log('This value is a number');
} else if (value === 'boolean') {
    console.log('This value is a boolean');
} else if (value === 'object') {
    console.log('This value is an object');
}else {
    console.log('What are you?')
}