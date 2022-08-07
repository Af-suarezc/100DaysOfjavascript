//class notation
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }
    talk(city){
        console.log(`Hi i'm ${this.name}, nice to meet you, i'm from ${city}`)
    }
}

let userNumber1 = new Person("Andrew", 45)

//using in built methods than come from the JS prototype object
let age = userNumber1.age.toString()
console.log(userNumber1.name + ', ' + age)
console.log(typeof(age))
//using a specific method generate in the code
userNumber1.talk("Bogotá")
//Lets code the behavior of the prototype with a specific property of the object & use againg inherit from the prototype object in
Person.prototype.diet = "Omnivore"
console.log("this is the inherit diet of the user from the prototype object ==> " + userNumber1.diet)
userNumber1.diet = "Vegan"
console.log(userNumber1.diet)

let arr1 = [1,2,3,4,5,"a", "w"]
console.log(arr1.toString())

//Maps in js
let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};
console.log(`Júlia tiene ${ages["Júlia"]}`);
console.log("Do we know how old is Jact?", "Jack" in ages);
//here we can see how the single maps inherit properties from prototype
console.log("Do the ages Map contains any property called toString?", "toString" in ages);
//a single object could be treated as a map, but i won't be a map
console.log({x: 1}.hasOwnProperty("x"));
console.log({x: 1}.hasOwnProperty(toString()));
//now is time to use the JS Map Class & a bit of getters and setters
let userAges = new Map();
userAges.set("Boris", 45);
userAges.set("Iris", 25);
userAges.set("Felix", 15);
console.log(`Boris is ${userAges.get("Boris")} years old`)
console.log(userAges.has("Felix"))
//now check if the Map() class contains toString method.
console.log(userAges.has("toString"))


//polymorphism
Person.prototype.toString = function(){
    return `A person called ${this.name}`
}
console.log(String(userNumber1))

//Symbols in Js
let humanSymbol = Symbol("Human")
Person.prototype[humanSymbol] = "Human"
console.log(userNumber1[humanSymbol])


//using the symbols to define properties which could be used in parallel with others properties
const symbolToString = Symbol("toString");
Array.prototype[symbolToString] = function() {
  return `${this.length} cm of blue thread`;
};

