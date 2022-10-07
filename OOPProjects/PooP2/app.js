import questionObj from "./data/questions.js";
import Exam from "./models/Exam.js"
import {UI}from"./models/UI.js";
/**
 * 
 * @param {Exam} quiz main test object
 * @param {UI} ui main ui object
 */
let questions = questionObj
questions.forEach(question=> question.shuffleTheOptions())

function renderPage(quiz,ui){
    if(quiz.isEnded()){
        ui.showScores(quiz.score)
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice)=>{
        quiz.guess(currentChoice);
        renderPage(quiz,ui)
        })
        ui.showProgress(quiz.questionsIndex+1,quiz.questions.length)
    }
}

function main(){
    const quiz= new Exam(questions);
    const ui = new UI()
    renderPage(quiz,ui)
}

main()
