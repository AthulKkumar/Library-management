console.log('hello');
Show();
//Constructor book
function Book(name, authour, type) {
    this.name = name;
    this.authour = authour;
    this.type = type;
}
//show constructor
function Show(){

    let  books = localStorage.getItem('books');
    if(books == null){
        booksObj = [];
    }else{
        booksObj = JSON.parse(books);
    }
    let elementData = "";
 
    booksObj.forEach((element,index) => {
        // console.log(element)
     elementData += `<tr>
                        <td>${index}</td>
                        <td>${element.name}</td>
                        <td>${element.authour}</td>
                        <td>${element.type}</td>
                        <td></td>

                    </tr>`
    // tableBody.innerHTML += elementData;   
});        
let tableBody = document.getElementById('tablebody')
    if(tableBody != 0){
        tableBody.innerHTML = elementData;
    }else{
        tableBody.innerHTML = `Type your Notes`
    }     

}
//Constructor display
function Display() {

}
//Prototypes
//Implementin add function
Display.prototype.add = function (book) {
    
    let  books = localStorage.getItem('books');
    if(books == null){
        booksObj = [];
    }else{
        booksObj = JSON.parse(books);
    }
    let elementData = "";
 
    booksObj.forEach((element,index) => {
        // console.log(element)
     elementData += `<tr>
                        <td>${index}</td>
                        <td>${element.name}</td>
                        <td>${element.authour}</td>
                        <td>${element.type}</td>
                    </tr>`
    // tableBody.innerHTML += elementData;   
});        
let tableBody = document.getElementById('tablebody')
    if(tableBody != 0){
        tableBody.innerHTML = elementData;
    }else{
        tableBody.innerHTML = `Type your Notes`
    }     
}
//Implementing clear function
Display.prototype.clear = function(){
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
    
}
//Implementing validate function
Display.prototype.validate = function (book) {
    //    console.log(book.name.length)
    if(book.name.length < 2 || book.authour.length < 2) {
        return false;
    }else {
        
        return true;
    }
}

let libraryform = document.getElementById('libraryform');

let libraryformSubmit = (e)=> {
    
    let name = document.getElementById('name').value;
    let authour = document.getElementById('authour').value;
    let type;
    let scifi = document.getElementById('scifi');
    let fantasy = document.getElementById('fantasy');
    let thriller = document.getElementById('thirller');
    let  books = localStorage.getItem('books');

    if (scifi.checked) {
        type = scifi.value;
    } else if (fantasy.checked) {
        type = fantasy.value;
    } else if (thriller.checked) {
        type = thriller.value;
    }

    if(books == null){
        booksObj = [];
    }else{
        booksObj = JSON.parse(books);
    }
    
    let book = new Book(name , authour, type);
    // console.log(booksObj)
    
    
    let display = new Display();
    
    if (display.validate(book) ){
        // console.log(book)
        booksObj.push(book);
        localStorage.setItem("books",JSON.stringify(booksObj));
        display.add(book);
        display.clear();
    }else{
        alert("erer")
        console.log('hi');
    }
    e.preventDefault();
}

libraryform.addEventListener('submit', libraryformSubmit);
