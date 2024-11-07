{
    // 
function getProperty<T,S extends keyof T>(obj:T,key:S):T[S]{
return obj[key]
}

const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));







    // 
}