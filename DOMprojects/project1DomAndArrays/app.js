const main = document.getElementsByClassName('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double-quantity');
const showMillionariesBtn = document.getElementById('show-richers');
const sortBtn = document.getElementById('sort');
const totalBtn = document.getElementById('calculate-total');


let data= [];

//Fetching the data
async function getRandomUsers(){
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    const user = data.results[0]
    const newUser = {
        name:`${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*10000000)
    }
    addData(newUser)
}

//add new user object to data array
function addData(obj){
    data.push(obj)
    upDateDom();
}

//update the DOM
function upDateDom(providedData = data){
    main.innerHTML='<h2><strong>Person</strong> wealth</h2>';
    providedData.forEach((item) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML=`<strong>${item.name}<strong>  ${formatMoney(item.money)}`
        main[0].appendChild(element)
    })

}

//format the money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
}


getRandomUsers();
getRandomUsers();
getRandomUsers();


//function double money
function doubleMoney(){
    data  = data.map((user)=>{
        return{...user, money: user.money*2}
    })
    upDateDom();
}

//show only millionaries
function onlyMillonaries(){
    data = data.filter((user)=>{
        user.money > 1000000;
    })
    upDateDom();
}

//sort by ritchers
function showByRichers(){
    data.sort((a,b)=> b.money - a.money)
    upDateDom();
}

//calculate wealth
function calculateWealth() {
    const wealth = data.reduce((accumulator, user) => (accumulator += user.money), 0);
    const wealthElement = document.createElement('div');
    wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main[0].appendChild(wealthElement);
  }
//event listener
addUserBtn.addEventListener("click", getRandomUsers, false);
doubleBtn.addEventListener("click", doubleMoney)
showMillionariesBtn.addEventListener("click", onlyMillonaries)
sortBtn.addEventListener("click", showByRichers)
totalBtn.addEventListener("click",calculateWealth)