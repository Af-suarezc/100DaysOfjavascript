export class UI{
    constructor(){

    }
    showQuestion(text){
        const title =document.getElementById('question')
        title.innerText=text;
    }
    /**
     * 
     * @param {strings[]} arr 
     */
    showChoices(arr, callback){
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML=''
        for(let i=0;i<arr.length;i++){
            const ansButton= document.createElement('button')
            ansButton.className="button"
            ansButton.addEventListener('click', ()=>callback(arr[i]))
            ansButton.innerText=arr[i]
            choicesContainer.appendChild(ansButton)

        }

    }

    /**
     * 
     * @param {strings[]} arr 
     */
    showScores(score){
        const quizElement = document.getElementById('quiz');
        const quizEndHTML = `
            <h1>Result</h1>
            <h2>Your score: ${score}</h2>
            <button id="reboot">Try-again</button>
        `
        quizElement.innerHTML=quizEndHTML
        
    }

    showProgress(currentIndex, total){
        const footerText= document.getElementById('progress');
        footerText.innerHTML=`Question ${currentIndex} of ${total}`;
    }


}