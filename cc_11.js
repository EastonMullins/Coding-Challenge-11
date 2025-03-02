// Task 1 - Created Book Class

class Book{
    constructor(title, author, isbn, copies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails(){
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity){
        if (this.copies >= quantity) {
            this.copies += quantity;
        } else {
            console.log("No Copies Available.")
        }
    }
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


//Task 2 - Creating a Borrower Class

class Borrower{
    constructor(name, borrowerId, borrowedBooks){
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`${book} not found in borrowed list.`);
        }
    }
}
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []


// Task 3 - Created Library Class

class Library{
    constructor(books, borrowers){
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

//Task 4 - Implemented Book Borrowing
    addBorrower(borrower){
        this.borrowers.push(borrower)
    }
    lendBook(borrowerId, isbn){
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        
        if (book && book.copies > 0 && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        }
    }
// Task 5 - Implemented Book Returns

    returnBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

        if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
            book.updateCopies(1);
            borrower.returnBook(book.title);
        }
    }
}
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

library.addBorrower(borrower1)
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []

