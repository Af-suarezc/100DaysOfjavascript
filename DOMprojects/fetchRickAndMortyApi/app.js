const  url = "https://rickandmortyapi.com/api/character";
const characterDiv = document.getElementById('character');
const list = document.createDocumentFragment();

let toRender =[]
//fetching using async await
//Here i fetch getting all the characters, afther this basic usage I proceed to generate a custom GET request.
async function getCharacters(){
    const response = await fetch(`${url}`)
    const data = await response.json()
    const character = data.results[1]
    const newChar = {
        name:`${character.name} who is ${character.status}`,
        pic: `${character.image}`,
    }
    gettingSomeCharacters(newChar)
    
}

//building objects after the response
function gettingSomeCharacters(newObj){
    toRender.push(newObj)
    
}
getCharacters();
gettingSomeCharacters();
console.log(toRender)

//Rendering the data
//update the DOM
function upDateDom(arrObj){
    const picture = document.createElement('img');
    const name =  document.createElement('h3');
    picture.setAttribute('src',`${arrObj.pic}`)
    name.innerText=`${arrObj.name}`
    list.appendChild(picture);
    list.appendChild(name);
    characterDiv.appendChild(list)   
}


