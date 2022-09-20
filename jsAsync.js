//Callbacks
//A callback is a function that is passed as an argument of another function
function myDisplayer(some) {
    console.log(some)
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
//Here myDisplayer is the callback of myCalculator
myCalculator(5, 5, myDisplayer);
//remember not to use the parenthesis when using a function as argument of another function.

//in the real world callbacks are used with async functions, lets go for it.

setTimeout(myFunction, 3000);

function myFunction(str='"I love You !!!"') {
    console.log(`Hello there, I come from the callback on the first async function used by you,  ${str}`)
}

//doing the same but with a different syntax
setTimeout(function() { myFunction('Welcome to the real world js'); }, 3000);
setTimeout(function() { myFunction(); }, 3000);

//this function can be used to display the time every second (1000 miliseconds)
//the DOM element with the demo ID, will be automatically actualized every second thanks to this function.
setInterval(myFunction, 1000);
function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}

//If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded.
//this will be the callback of this example.

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
  
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
}

//myDisplayer is passed to getFile() as an argument.
getFile(myDisplayer);



//Javascript Promises.


let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);

function myDisplayer1(some){
    console.log(some)
}

let myPromise1 = new Promise(function(myResolve, myReject){
    let x =0;
    if(x==0){
        myResolve("OK");
    }else{
        myReject("Error")
    }
})

myPromise1.then(
    function(value){myDisplayer(value)},
    function(error){myDisplayer(error)}
)

//using promise to setTimeOut example

let myPromise2 = new Promise(function(myResolve, myReject){
    setTimeout(function(){myResolve("I love this concept"); }, 3000);
    setTimeout(function(){myReject("F for this promise "); }, 3000);
});
myPromise2.then(function(value){
    console.log(value)
})


//Finally using async await, lets make the promises easier pls.
//async makes a function return a Promise
//await makes a function wait for a Promise AWAIT KEYWORD can only be used inside an async function.


async function myDisplay2(){
    let myPromise = new Promise(function(resolve){
        setTimeout(function(){resolve("I love the Async Await concept!");}, 3000)
    });
    let text = await myPromise;
    console.log(text);
}

myDisplay2();

