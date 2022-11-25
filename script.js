const mainDiv = document.getElementById('main');
const user = [
    { userName: "Janne", Password: "test"}
]

//check if already signed in
if (localStorage.getItem("user")) {
    showName();
} else {
    logIn();
}

// //////////////////////////////////
// ////Display User and log-out//////
// //////////////////////////////////

function showName() {
    //Removes login content
    mainDiv.innerHTML = "";
    //Constant user is assigned the logged in user from ls
    let user = localStorage.getItem("user");

    //Creates logout button
    let logOutBtn = document.createElement("button")
    logOutBtn.innerText = "Log out";
    

    logOutBtn.addEventListener('click', () => {
        //Removes ls user
        localStorage.removeItem("user");
        console.log("Logged out");
        //Brings back logIn
        logIn();
    });

    mainDiv.appendChild(logOutBtn);
    //Welcomes the user
    demo.innerText = "Hej " + user + "!";
}

//Error message
function notaUser() {
    demo.innerText = "Incorrect username or password";
}

// //////////////////////////////////
// //////////log in space////////////
// //////////////////////////////////



function logIn() {
    demo.innerHTML = "";
    mainDiv.innerHTML = "";

    let loginBtn = document.createElement("button");
    loginBtn.innerText = "Logga in";

    // Input and button for Username and Password
    let username = document.createElement('input');
    username.id = "username";
    username.type = "text";
  
    let password = document.createElement('input');
    password.id = "password";
    password.type = "text";
    
    //Places the buttons and input field
    mainDiv.innerHTML += 'Username<br/>';
    mainDiv.appendChild(username);
    mainDiv.innerHTML += '<br>Password</br>';
    mainDiv.appendChild(password);
    mainDiv.appendChild(loginBtn);

    //Button
    loginBtn.addEventListener('click', () => {
        console.log("beep", Pass.value, Name.value)
        //Checks if the input field matches the first account in "user"
    if( Pass.value === user[0].Password && Name.value === user[0].userName) {
        
        //Saves successful login in ls
        localStorage.setItem("user", user[0].userName);
        console.log("user saved", localStorage.getItem("user"));
        showName();
        //If user is incorrect - display error
        } else {
            notaUser();
            console.log("else statement");
        }
    }); 
}

// //////////////////////////////////
// //////////Login Variables/////////
// //////////////////////////////////

const loginBtn = document.getElementById('loginBtn');
const Name = document.getElementById('username');
const Pass = document.getElementById('password');