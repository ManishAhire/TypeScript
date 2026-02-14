var myName = 'Manish';

myName = 1234; // This is allowed in JavaScript, JS is not type safe.
// but it will cause an error in TypeScript because 'myName' is inferred to be of type 'string'.

console.log(myName);
