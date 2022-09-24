const  url = "https://rickandmortyapi.com/api/character/";
const table = document.getElementById('characters-table');
let charactersArr=[];

//Add table headers
table.innerHTML = `<tr>
            <th>Status</th>
            <th>Name</th>
            <th>Picture</th>
            </tr>`;


async function getData(){
    let child = table.lastElementChild; 
    while (child) {
        table.removeChild(child);
        child = table.lastElementChild;
    }
    table.innerHTML = `<tr>
            <th>Status</th>
            <th>Name</th>
            <th>Picture</th>
            </tr>`;
    const response = await fetch(url)
    let data = await response.json();
    let cartoons = data.results;
    console.log(cartoons)
    
    cartoons.forEach((cartoon)=>{
        const tr = document.createElement('tr')
              tr.innerHTML = `<td>${cartoon.status}</td>
                              <td>${cartoon.name}</td>
                              <td><img src="${cartoon.image}"></td>`
        table.appendChild(tr)
        const newCartoon = {
                name:`${cartoon.name}`,
                picture: `${cartoon.image}`,
                stat:`${cartoon.status}`
        }
        addData(newCartoon)
    });
    
}

function addData(obj){
    charactersArr.push(obj)
}

function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const lower = str.toLowerCase();
    if(lower==='unknown'){
        return lower
    }else{
        const capitalized = lower.replace(/^./, str[0].toUpperCase());
        return capitalized;
    }

    
}

function getStatus(){
    let child = table.lastElementChild; 
    while (child) {
        table.removeChild(child);
        child = table.lastElementChild;
    }
    table.innerHTML = `<tr>
            <th>Status</th>
            <th>Name</th>
            <th>Picture</th>
            </tr>`;
    
    drawingByCharStatus(charactersArr)
    
}

function drawingByCharStatus(arr){
    for(let i = 0; i < arr.length; i++){
        text = arr[i].stat;
        if(text !==capitalizeFirstLetter(document.getElementById('search-criteria').value)){
            console.log('Status not valid')
        }else{
            const tr = document.createElement('tr')
              tr.innerHTML = `<td>${arr[i].stat}</td>
                              <td>${arr[i].name}</td>
                              <td><img src="${arr[i].picture}"></td>`
            table.appendChild(tr)
        }
        
    }
 
}

let inputT =document.querySelector('input')
inputT.addEventListener("keyup", function enterSearch(event){
    if(event.key === "Enter"){
        getStatus();
    }
})


