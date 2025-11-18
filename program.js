




let users = [];
const form = document.getElementById('registrationForm');
const userList = document.getElementById('userList');

form.onsubmit = function(event) {
event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (!isValidName(name)) {
    alert('В імені має бути не менше 2 символів!');
    return;
}

if (!isValidPassword(password)) {
            alert('Пароль повинен бути щонайменше 6 символів');
            return;
        
}
const newUser = {
name: name,
email: email,
password: password
};

users.push(newUser);
form.reset();
console.log(users)


//  updateUserList();
};

    



function isValidPassword(password) {
    
    
        return password.length >= 6;
        
}



function isValidName(name) {
   

    return name.length > 2;
 }

// function updateUserList() {
// userList.innerHTML = '';
// for (let i = 0; i < users.length; i++) {
// const user = users[i];
// const listItem = document.createElement('li');
// listItem.textContent = user.name + " " + user.email;
// userList.appendChild(listItem);
// }
// };
