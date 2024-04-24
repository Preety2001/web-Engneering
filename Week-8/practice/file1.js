const friends = '4';
console.log(`hello I have ${friends} friends`);

var obj1 = {
    name: "preety",
    gender: "female",
    country: "Pakistan",
    countryCode: "0000",
    age: "21"
    
};
 let obj2={...obj1};
 obj1.name="Ayesha";
    console.log(obj1);
    console.log(obj2);

    const{name,age,...rest}=obj
    console.log(name,age);
    console.log(rest);

    






