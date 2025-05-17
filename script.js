import { Book } from "./book.js";
import { Library } from "./library.js";

const petitPrince = new Book("Le Petit Prince", "Antoine de Saint-Exupéry");

const shelf = new Library();

shelf.addBook(petitPrince);

const results = document.getElementById('results');

results.append(shelf.listBooks());

const addForm = document.getElementById('add');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    shelf.addBook(new Book(event.target[0].value, event.target[1].value));
    results.replaceChildren(shelf.listBooks());
})

const searchForm = document.getElementById('search');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    results.replaceChildren(shelf.findBookByTitle(event.target[0].value));
})
