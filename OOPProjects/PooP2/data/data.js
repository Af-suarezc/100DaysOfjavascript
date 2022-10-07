export default class API1{

    /**
     * 
     * @param {Data[]} data 
     */
    constructor(arrData){
        arrData = this.arrData;
    }
    // async getQuestions(){
    //     const response = await fetch('https://the-trivia-api.com/api/questions');
    //     const data = await response.json();
    //     const questions = data.results;
    //     console.log(questions);
    //     questions.forEach((question) => {
    //         const newQuestion = {
    //             type:`${question.type}`,
    //             question: `${question.question}`,
    //             options:`${question.incorrect_answers}`,
    //             answer:`${question.correct_answer}`
    //     }
    //     this.buildInnerArr(newQuestion)
    //     console.log(arrData)
    //     });
    //     return questions;
    // }

    async questionsData(){
        const response = await fetch('https://the-trivia-api.com/api/questions?limit=10')
        const data1 = await response.json();
        console.log("Esta es la información desde la clase inicial")
        return this.arrData = data1;
        
    }
    /**
     * 
     * @param {Array[]} obj 
     */
    buildInnerArr(obj){
        this.arrData.push(obj)
    }

}

class Controller1 extends API1{
    checkQuestions(){
        return this.questionsData()
    }
}

export {API1,Controller1}