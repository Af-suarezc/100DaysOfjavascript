const ul = document.getElementById('authors');
const list = document.createDocumentFragment();
const url = 'https://jsonplaceholder.typicode.com/users';

function gettingTheData(){    
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        let authors= data;
        //Single user
        // console.log(authors[0])
        // let li = document.createElement('li');
        // let name = document.createElement('h2');
        // let email = document.createElement('span');
        // name.innerText=`${authors[0].name}`
        // email.innerHTML=`${authors[0].email}`
        // li.appendChild(name);
        // li.appendChild(email);
        // list.appendChild(li);
        // ul.appendChild(list);
        //getting more users
        authors.map(function(author){
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');
            name.innerText=`${author.name}`;
            email.innerText=`${author.email}`;
            li.appendChild(name);
            li.appendChild(email);
            list.appendChild(li);
            
        })
    }).catch(function(error){
        console.log(error);
    });
}

function addingUsersToTheDom(){
    gettingTheData();
    ul.appendChild(list);
}
