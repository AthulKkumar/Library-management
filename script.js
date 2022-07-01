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

let libraryform = document.getElementById('libraryform');

let libraryformSubmit = (e) => {

    console.log('hellll')
    e.preventDefault();
}

libraryform.addEventListener('submit', libraryformSubmit);
