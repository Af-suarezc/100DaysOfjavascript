//@ts-check
import { Question} from "./Question.js"
export default class Exam{
    questionsIndex =0
    score =0
    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions=questions
    }
    getQuestionIndex(){
        return this.questions[this.questionsIndex]
    }
    /**
     * 
     * @param {string} answer 
     */
    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionsIndex++;        
    }
    isEnded(){
        return this.questions.length === this.questionsIndex;
    }
}