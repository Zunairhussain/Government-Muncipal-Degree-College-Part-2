var users =[]

function onSubmit() {
    const userName = document.getElementById("name").value
    const userEmail = document.getElementById("email").value
    const usermessage = document.getElementById("message").value

    var newUser = {
        name: userName,
        email: userEmail,
        message: usermessage,
    }
    users.push(newUser)
    console.log(users);
}


// users.push ("newUser")
function displayResult() {
    var result = ""
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
    result = result + '<div><h1>Name: ${user.name}</h1> <p>Email: ${user.email}</p> <span>Phone: ${user.phone}</span></div>'       
    }
    console.log("resultresult" , result)
document.getElementById("result").innerHTML ="result"
}






// var students = [];

// function addUser() {
//     students.push( document.getElementById("Student name").value)
//     printStudents()
// }


// function findUser() {
//     var searchValue = document.getElementById("searchInput").value;
//     var result = [];
//     for (let index = 0; index < students.length; index++) {
//         const student = students[index];
//         if (student == searchValue) {
//             result = `user found on index ${index}`
//             break;
//         }
//     }
//     document.getElementById("searchResult").innerHTML = result
// }

// function printStudents() {
//     console.log('====================================');
//     console.log(students);
//     console.log('====================================');
// }
