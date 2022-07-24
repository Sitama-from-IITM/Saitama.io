// Book Class (representation of book as object)
class Book {
    constructor(title, author, genre, publication) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publication = publication;
    }
}

// UI Handling
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Five Point Someone',
                author: 'Chetan Bhagat',
                genre: 'Fiction, Buddy',
                publication: 'Rupa & Co.'
            } ,
            {
                title: 'It Ends With Us',
                author: 'Colleen Hoover',
                genre: 'Romance novel, Fiction, Contemporary romance',
                publication: 'Atria Books'
            } ,
            {
                title: 'Ikigai',
                author: 'Héctor García',
                genre: 'Self-help book',
                publication: 'Random House UK'
            } ,
            {
                title: 'Three Mistakes of My Life',
                author: 'Chetan Bhagat',
                genre: 'Novel, Fiction',
                publication: 'Rupa Publications'
            }
        ] ;

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static deleteBook(target) {
        if (target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
        }
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.publication}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

// Storage Handling

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const genre = document.querySelector('#genre').value;
    const publication = document.querySelector('#publication').value;

    // Validate book input
    if(title === '' || author === '' || genre === '' || publication === ''){
        alert("⚠️  Please enter all book details");
    } else {
        // Instatiate book
        const book = new Book(title, author, genre, publication);

        // console.log(book);

        // Add Book to UI
        UI.addBookToList(book);

        // Clear fields
        UI.clearFields();
    }

});

// Event: Remove a Book
document.querySelector("#book-list").addEventListener('click', (e) => {
    UI.deleteBook(e.target);
});