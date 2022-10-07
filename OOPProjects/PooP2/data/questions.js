import questionsApi  from "./datav3.js";
import { Question } from "../models/Question.js";

function questionBuilder(){
    let questionsObjects= []
    const arrayQuest = questionsApi;
    for(let i = 0; i<arrayQuest.length; i++){
        const newObject = new Question(arrayQuest[i].type, arrayQuest[i].question, arrayQuest[i].incorrectAnswers,arrayQuest[i].correctAnswer)
        questionsObjects.push(newObject) 
    }
    return questionsObjects
}

const questionObj = questionBuilder()

export default questionObj;