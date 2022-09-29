let data =[]
/**
 * 
 * @param {array[]} arr 
 */
async function questionsData(arr){
    const response = await fetch('https://opentdb.com/api.php?amount=10')
    const data = await response.json();
        const questions = data.results;
        questions.forEach((question) => {
            const newQuestion = {
                type:`${question.type}`,
                question: `${question.question}`,
                options:`${question.incorrect_answers}`,
                answer:`${question.correct_answer}`
        }
        arr.push(newQuestion)
    })
    return arr
}

export {questionsData}

