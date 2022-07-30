//Using and implementing the concept of higher Order Functions in JS
//Reduce a bidimentional array into a 1-d array, using reduce+concat methods.

let array2D = [[1,2.2,3,4],["a","b","c"],[5,6,6,7,9],["H", "I", "J"]]

let flatArr = array2D.reduce((previousValue, currenValue)=>previousValue.concat(currenValue))

console.log(flatArr)


//a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning

function loop(start, test, update, body){
    for (let value = start; test(value); value = update(value)){
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);


//Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

const isBelowThreshold = (currentValue)=> currentValue < 40;

const arr1 =[105, 48, 102, 0]
console.log(arr1.some(isBelowThreshold))

const modValidation = (currentValue) => currentValue %2 ==0;
const arr2 =[10, 48, 102, 0]
console.log(arr2.every(modValidation))


const arr3 =[10, 48, 102, 10]

function every(arr, test){
    for(let element of arr){
        if(!test(element)) return false;
    }
    return true
}

function every2(arr, test){
    return !arr.some(element => !test(element));
}
console.log(every(arr3, (n=> n%2 ==0)))
