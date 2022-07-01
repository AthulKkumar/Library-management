console.log('hello');
//Constructor book
function Book(name, authour, type) {
    this.name = name;
    this.authour = authour;
    this.type = type;
}

//Constructor display
function Display() {

}
//Prototypes
//Implementin add function
Display.prototype.add = function (book) {
    // console.log(book)
    let tableBody = document.getElementById('tablebody');
    let elementData = `<tr>
                        <th scope="row">1</th>
                        <td>${book.name}</td>
                        <td>${book.authour}</td>
                        <td>${book.type}</td>
                    </tr>`
    tableBody.innerHTML += elementData;                
}
//Implementing clear function
Display.prototype.clear = function(){
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();

}

let libraryform = document.getElementById('libraryform');

let libraryformSubmit = (e) => {

    let name = document.getElementById('name').value;
    let authour = document.getElementById('authour').value;
    let type;
    let scifi = document.getElementById('scifi');
    let fantasy = document.getElementById('fantasy');
    let thriller = document.getElementById('thriller');

    if (scifi.checked) {
        type = scifi.value;
    } else if (fantasy.checked) {
        type = fantasy.value;
    } else if (thriller.checked) {
        type = thriller.value;
    }

    let book = new Book(name, authour, type);
    console.log(book)
    let display = new Display();

    display.add(book);
    display.clear();
    e.preventDefault();
}

libraryform.addEventListener('submit', libraryformSubmit);
