//Basic example of fetch API-REST
fetch('https://jsonplaceholder.typicode.com/posts').then(function (response){
    //check if the API call was successful.
    if(response.ok){
        return response.json();
    }
    //There was an error
    return Promise.reject(response);

}).then(function (data){
    console.log(data)
}).catch(function(error){
    console.log('something went wrong' + error)
})

