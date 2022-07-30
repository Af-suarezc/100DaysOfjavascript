//Function that imitates the behavior of js range method, returning an array that includes the values of the range
function rangeP(a,b){
    let lowerBound =a;
    let upperBound =b;
    let rangeArray = []
    for(i=lowerBound; i<= upperBound; i++){
        rangeArray.push(i)
    }
    return rangeArray
}

let rangeTest = rangeP(1,10)
let rangeTest2 = rangeP(40,1000)
console.log(rangeTest)
console.log(rangeTest2)

//same idea but add a step, meaning a customize increment on the function
function rangeP1(a,b, c){
    let lowerBound =a;
    let upperBound =b;
    let step =c;
    let rangeArray = []
    for(i=lowerBound; i<= upperBound; i+=step){
        rangeArray.push(i)
    }
    return rangeArray
}

let test = rangeP1(1,10, 2)
let test2 = rangeP1(40,1000, 100)
console.log(test)
console.log(test2)


//sumP function, applying the destructuration of in built methods and 
//implementing them by the usage of basic concepts of JS and maths
//this case is a Summation function

function sumP(a){
    let sumaTotal = 0
    for(let i = 0; i <= a; i++){
        sumaTotal = sumaTotal + i
    }
    return sumaTotal
}

let testSum = sumP(8)
console.log(testSum)

//Using recursivity in js and exploding the task thread

function esPar(n){
    if(n%2 ==0){
        return true
    }else if(n%2==1){
        return false
    }else{
        let m = n -2;
        esPar(m)
    }
}
console.log(esPar(2))
console.log(esPar(3))
console.log(esPar(-1))


//accesing to properties  on Js data types, counting the amount of "F" on a string
function totalOfFs(str){
    let contadorFs = 0
    for(let i = 0;i <= str.length; i++){
        if(str[i] == "F"){
            contadorFs = contadorFs +1
        }
    }
    return contadorFs
}

console.log(totalOfFs("ALGO"))

console.log(totalOfFs("FELIPE FERNANDEZ FELIZOLLAZ FRANCO FFF"))

//same idea but with a customize char target 
function contarAvoluntad(str, target){
    let contadorFs = 0
    for(let i = 0;i <= str.length; i++){
        if(str[i] == target){
            contadorFs = contadorFs +1
        }
    }
    return contadorFs
}


console.log(contarAvoluntad("PLACE", "a"))
console.log(contarAvoluntad("PLACE", "A"))
