async function questionsData(){
    const response = await fetch('https://the-trivia-api.com/api/questions?limit=5')
    const data1 = await response.json();
    return data1
}

const questionsApi = await questionsData();

export default questionsApi


