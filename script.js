/////////////// library at initial state////////////////////////
let library = [];

let borrowedBooks = [];

/////////////////////////////////////////MY BOOKS///////////////////////////////////////////////////////////////////////
const book1 = {
  title: "kalisa",
  Author: "pazzo",
  available: true,
};
const book2 = {
  title: "love that is not mine",
  Author: "benigne",
  available: false,
};

const book3 = {
  title: "Backend Engineering",
  Author: "sandrine",
  available: false,
};
const book4 = {
  title: "gushesha",
  Author: "Tchami",
  available: true,
};

const book5 = {
  title: "coding",
  Author: "xander",
  available: true,
};

//////////////////////////////////add books in the library//////////////////////////////////////////
const addBooks = function (book) {
  library.push(book);
  return library;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// DISPLAY THE AVAILABLE BOOKS//////////////
const displayBooks = function () {
  library.forEach((book) => console.log(book));
};

//the book that will be borrowed
let toBeBorrowed;
////////////////////////////////////////////BORROW YOUR BOOK//////////////////////////////////////////////////////////////////////////
//function to borrow  a book and this will be based on the availability of the book and if the authors name as well as book title are belong to a particular book

const borrowBook = function (bookTitle, bookAuthor) {
  // loop over the library and check if the book is available
  library.forEach((bk) => {
    if (bk.available && bk.title === bookTitle && bk.Author === bookAuthor) {
      toBeBorrowed = bk;
      borrowedBooks.push(toBeBorrowed);
      return borrowedBooks;
    } else {
      console.log("Sorry the book is not avilable");
    }
  });
  //remove the borrowed book from the library
  library = library.filter((books) => books !== toBeBorrowed);
  return library;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////RETURN BACK THE BOOK YOU HAVE BORROWED ////////////////////////////////////////////////////////
const returnBook = function (bookTitle, bookAuthor) {
  borrowedBooks.forEach((book) => {
    //ccheck if the book you want to return is among the list of the borrowed books
    if (book.title === bookTitle && book.Author === bookAuthor) {
      library.push(book);
    }
  });

  return library;
};

//////////////////////////// add books in the library///////////////////////////////////////////////////////////////
console.log(addBooks(book1));
console.log(addBooks(book2));
console.log(addBooks(book3));
console.log(addBooks(book4));
console.log(addBooks(book5));
///////////////////////////////borrow this book////////////////////////////////////////////////////////////////////////////
console.log(borrowBook("coding", "xander"));
console.log(borrowBook("gushesha", "Tchami"));
console.log(borrowBook("kalisa", "pazzo"));
///////////////////////DISPLAY THE AVAILABLE BOOKS////////////////////////
displayBooks();
////////////////CHECK IF THE BOOKS ARE BEING RETURNED/////////////////////////
console.log(returnBook("coding", "xander"));
console.log(returnBook("kalisa", "pazzo"));
console.log(returnBook("gushesha", "Tchami"));
