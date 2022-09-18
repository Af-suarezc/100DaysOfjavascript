//btn-2 change site background color

const btn2 = document.getElementById('btn-2')

function ramdon(number){
    return Math.floor(Math.random()*(number+1))
}
function changeBkgColor() {
    const rndColor= `rgb(${ramdon(255)}, ${ramdon(255)}, ${ramdon(255)})`;
    document.body.style.backgroundColor=rndColor;
}
btn2.addEventListener('click', changeBkgColor)

//btn-3 generates a new image and adds as a new dom element 
const btn3 = document.getElementById('btn-3');
const containerNumber3 = document.querySelector('.box-3')

function changeBkgColor1() {
    const rndColor= `rgb(${ramdon(255)}, ${ramdon(255)}, ${ramdon(255)})`;
    containerNumber3.style.backgroundColor=rndColor;
}
containerNumber3.addEventListener('mouseover', changeBkgColor1)

const generalContainer = document.getElementById('container')
const newImgNode = document.createElement('img')
const newBtn = document.createElement('button')
newBtn.setAttribute('id','btn-2')
newBtn.textContent  ='del the img'
function newNode(){
    const src = 'https://picsum.photos/200';
    newImgNode.setAttribute('src', src)
    containerNumber3.appendChild(newBtn)
    generalContainer.appendChild(newImgNode)
    
}
function delNode(){
    generalContainer.removeChild(newImgNode)
}
btn3.addEventListener('click', function handleClick(){
    btn3.textContent='clicked';
})

btn3.addEventListener('click', newNode)
newBtn.addEventListener('click', delNode)
newBtn.addEventListener('click', function handleClick1(){
    if(newBtn.textContent ==='del the img'){
        containerNumber3.removeChild(newBtn)
        btn3.textContent='Click me';
    }
})







