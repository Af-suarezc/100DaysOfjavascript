class API{
    constructor(){
        this.questions=[]
    }
    // fetchQuestions(){
    //     const url = "https://opentdb.com/api.php?amount=10";
    //     return fetch(url).then(
    //         res => {
    //             return res.json()
    //         }
    //     ).then(data =>{
    //         const quest = data.results
    //         this.questions = quest;
    //     })
    // }

    // async fetchQuestions(){
    //     const response = await fetch('https://the-trivia-api.com/api/questions');
    //     const data = await response.json();
    //     const questionsData = data.results;
    //     console.log(questionsData)
    //     questionsData.forEach((question) => {
    //         const newQuestion = {
    //             type:`${question.type}`,
    //             question: `${question.question}`,
    //             options:`${question.incorrect_answers}`,
    //             answer:`${question.correct_answer}`
    //         }
    //         return this.questions.push(newQuestion)
    //     })
        
    // }
    // async questionsData(){
    //     const response = await fetch('https://the-trivia-api.com/api/questions?limit=5')
    //     const data1 = await response.json();
    //         const questionsData = data1.results;
    //         return questionsData;
    // }
    async questionsData(){
        const response = await fetch('https://the-trivia-api.com/api/questions?limit=5')
        const data1 = await response.json();
        this.questions = data1;
        console.log("Esta es la información desde la clase")
        console.log(this.questions)
    }
}

class Controller extends API{
    checkQuestions(){
        return this.questionsData()
    }
}

export {Controller};