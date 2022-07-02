console.log('hello');
Show();
//Constructor book
function Book(name, authour, type) {
    this.name = name;
    this.authour = authour;
    this.type = type;
}
//show function
function Show() {

    let books = localStorage.getItem('books');
    if (books == null) {
        booksObj = [];
    } else {
        booksObj = JSON.parse(books);
    }
    let elementData = "";

    booksObj.forEach((element, index) => {
        // console.log(element)
        elementData += `<tr>
                        <td>${index}</td>
                        <td>${element.name}</td>
                        <td>${element.authour}</td>
                        <td>${element.type}</td>
                        <td><button onclick="deleteBook(${index})" class="btn btn-danger">Delete</button></td>

                    </tr>`
    });
    let tableBody = document.getElementById('tablebody')
    if (tableBody != 0) {
        tableBody.innerHTML = elementData;
    } else {
        tableBody.innerHTML = `Type your Notes`
    }

}
//Adding action to delete button
let deleteBook = (index) => {
    let books = localStorage.getItem('books');
    if (books == null) {
        booksObj = [];
    } else {
        booksObj = JSON.parse(books);
    }
    console.log(booksObj)
    booksObj.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(booksObj));
    Show();
}
//Constructor display
function Display() {

}
//Prototypes

//Implementing clear function
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();

}
//Implementing validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.authour.length < 2) {
        return false;
    } else {

        return true;
    }
}
//Implementing error function
Display.prototype.error = (type, msg) => {
    let message = document.getElementById('message');
    message.innerHTML += `<div class="alert alert-${type}" role="alert">
    This is a ${msg} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
  </div>`;

    setTimeout(() => {
        message.innerHTML = '';
    }, 2000);
}

let libraryform = document.getElementById('libraryform');

let libraryformSubmit = (e) => {

    let name = document.getElementById('name').value;
    let authour = document.getElementById('authour').value;
    let type;
    let scifi = document.getElementById('scifi');
    let fantasy = document.getElementById('fantasy');
    let thriller = document.getElementById('thirller');
    let books = localStorage.getItem('books');
    //To check which checkbox is clicked
    if (scifi.checked) {
        type = scifi.value;
    } else if (fantasy.checked) {
        type = fantasy.value;
    } else if (thriller.checked) {
        type = thriller.value;
    }
    //Creating an array of bookObj
    if (books == null) {
        booksObj = [];
    } else {
        booksObj = JSON.parse(books);
    }
    //Creating an object of constructor book    
    let book = new Book(name, authour, type);

    let display = new Display();
    //Checking the validation   
    if (display.validate(book)) {

        booksObj.push(book);
        localStorage.setItem("books", JSON.stringify(booksObj));
        Show();
        display.clear();
        display.error('success', 'Sucessfully');
    } else {

        display.error('danger', 'Error');
    }
    e.preventDefault();
}

libraryform.addEventListener('submit', libraryformSubmit);
