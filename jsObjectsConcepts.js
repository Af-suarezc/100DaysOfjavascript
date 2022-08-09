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


//using the symbols to define properties which could be used in parallel with others properties on this case I will use the toString method as a in built method and customize toString method using the symbols


const symbolToString = Symbol("toString");
Array.prototype[symbolToString] = function() {
  return `${this.length} cm of blue thread`;
};
let stringObject = {
    [symbolToString]() { return "a hemp string"; }
};
console.log([1,2,3].toString())
console.log([1,2,3][symbolToString]())
console.log(stringObject[symbolToString]())


//The interface of an iterator


//The iterator interface
let okIterator ="OK"[Symbol.iterator]();
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())

//implementing an iterable data structure. A matrix class acing as
//two dimensional array.

class Matrix{
    constructor(width, height, element =(x,y)=>undefined){
        this.width=width;
        this.height = height;
        this.content = [];
        for(let y=0; y<height;y++){
            for(let x=0; x<width; x++){
                this.content[y*width + x]=element(x,y);
            }
        }
    }
    get(x,y){
        return this.content[y*this.width+x];
    }
    set(x,y,value){
        this.content[y*this.width+x] = value;
    }    
}


class MatrixIterator{
    constructor(matrix){
        this.x = 0;
        this.y =0;
        this.matrix = matrix;
    }
    next(){
        if(this.y ==this.matrix.height) return {done: true}
        let value = {x:this.x, y:this.y, value: this.matrix.get(this.x,this.y)};
        this.x++;
        if(this.x ==this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return{value,done:false}
    }
}


Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
console.log(matrix)

for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}

//Getters, setters, and statics
let varyingSize = {
    get size() {
      return Math.floor(Math.random() * 100);
    }
};

class Temperature {
    constructor(celsius) {
      this.celsius = celsius;
    }
    get fahrenheit() {
      return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
      this.celsius = (value - 32) / 1.8;
    }
  
    static fromFahrenheit(value) {
      return new Temperature((value - 32) / 1.8);
    }
}
  
let temp = new Temperature(22);
console.log(temp.fahrenheit);

//inheritance
class SymmetricMatrix extends Matrix{
    constructor(size, element=(x,y)=>undefined){
        super(size, size,(x,y)=>{
            if(x<y) return element(y,x);
            else return element(x,y);
        });
    }
    set(x,y,value){
        super.set(x,y,value);
        if(x != y){
            super.set(y,x,value);
        }
    }
}

let matrixS = new SymmetricMatrix(5, (x,y)=>`${x}, ${y}`)
console.log(matrixS)

//The instance of Operator
// It is occasionally useful to know whether an object was derived from a specific class. For this, JavaScript provides a binary operator called instanceof.

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix)
console.log(new SymmetricMatrix(2) instanceof Matrix)
console.log(new Matrix(2,2) instanceof SymmetricMatrix)
console.log([1] instanceof Array)

