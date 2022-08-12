function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found
}

/*function partitionBooksByBorrowedStatus(books) {
  let out = [];
  let returned = [];
  books.forEach(book => { out += book.borrows.filter(borrow => borrow.returned === false)});
  books.forEach(book => { returned += book.borrows.filter(borrow => borrow.returned === true)});
  return [out + returned]
}*/
  
function partitionBooksByBorrowedStatus(books) {
  let total = [], stillBorrowedBooks = [], returnedBooks = []
  books.forEach(book => {
    book.borrows.some((borrow)=> borrow.returned == false) 
      ? stillBorrowedBooks.push(book) : returnedBooks.push(book)
  });

  total.push(stillBorrowedBooks)
  total.push(returnedBooks)

  return total; 


}

/*function getBorrowersForBook(book, accounts) {
  let list = [];
  const id = accounts.id;
  let found = accounts.find(account => id in book);
  accounts.forEach(account => (list += found));
  return list.slice[0, 11];
}*/

function getBorrowersForBook(book, accounts) {
  let map = book.borrows.map(borrower => {
  let found = accounts.find(account => borrower.id === account.id);
    found.returned = borrower.returned
  return found
  })
  return (map.filter((borrower, i) => map.findIndex(item => item.id === borrower.id) === i))
}

//if the id is found in the borrows portion of the book, add that account to the list, and specify if the book has been returned. list must be less than 10.

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
