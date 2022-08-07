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

//Lets code the behavior of the prototype with a specific property of the object
Person.prototype.diet = "Omnivore"
console.log(userNumber1.diet)
userNumber1.diet = "Vegan"
console.log(userNumber1.diet)