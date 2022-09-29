export default class API{

    /**
     * 
     * @param {Data[]} data 
     */
    constructor(arrData){
        arrData = this.arrData;
    }
    async getQuestions(){
        const response = await fetch('https://opentdb.com/api.php?amount=10');
        const data = await response.json();
        const questions = data.results;
        console.log(questions);
        questions.forEach((question) => {
            const newQuestion = {
                type:`${question.type}`,
                question: `${question.question}`,
                options:`${question.incorrect_answers}`,
                answer:`${question.correct_answer}`
        }
        this.buildInnerArr(newQuestion)
        console.log(arrData)
        });
        return questions;
    }
    /**
     * 
     * @param {Array[]} obj 
     */
    buildInnerArr(obj){
        this.arrData.push(obj)
    }

}