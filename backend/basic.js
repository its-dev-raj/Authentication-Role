// key,values,entries in Object 

const person = { name: "raj", age: 3 };

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

for (let [k, v] of Object.entries(person)) {
    console.log(k,v)
}
