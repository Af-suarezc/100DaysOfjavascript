export class Question{
    /**
     * @param {string} type 
     * @param {string} text 
     * @param {string[]} choices 
     * @param {string} answer 
     */
    constructor(type, text, choices, answer){
        this.type= type;
        this.text=text;
        this.choices=choices;
        this.answer=answer
    }

    /**
     * 
     * @param {string} choice 
     * @returns {boolean} true if the answer is correct
     */
    correctAnswer(choice){
        return choice ===this.answer;
    }
    shuffleTheOptions(){
        let answer = this.answer,  j;
        let options = this.choices;
        options.push(answer);   
        let i = options.length;
        
        while(i!=0){
            j = Math.floor(Math.random()*i);
            i--;
            [options[i], options[j]]=[options[j], options[i]]
        }
        return options
    }
}