

const users = 'https://jsonplaceholder.typicode.com/users';



function loadUsers(){
    fetch(users).then(res => res.json()).then(data => console.log(data));
}