var students = [];

function addUser() {
    students.push( document.getElementById("Student name").value)
    printStudents()
}


function findUser() {
    var searchValue = document.getElementById("searchInput").value;
    var result = [];
    for (let index = 0; index < students.length; index++) {
        const student = students[index];
        if (student == searchValue) {
            result = `user found on index ${index}`
            break;
        }
    }
    document.getElementById("searchResult").innerHTML = result
}

function printStudents() {
    console.log('====================================');
    console.log(students);
    console.log('====================================');
}
