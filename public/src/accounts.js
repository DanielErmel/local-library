function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found
}
function sortAccountsByLastName(accounts) {
  let ordered = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1);
  return ordered
}

/*function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (const id in books.borrows) {
    if (id === account.id){
      total++;
    }
  }                                          
  return total;
}*/
  
function getTotalNumberOfBorrows(account, books) { 
  const id = account.id 
  let total = 0 
  books.forEach(book => { total += book.borrows.filter(borrow => borrow.id === id).length }); 
  return total }

/*function getBooksPossessedByAccount(account, books, authors) {
  let stillBorrowedBooks = [];
  books.forEach(book => {
    book.borrows.map((borrow)=> borrow.returned === false)
      stillBorrowedBooks.push(book)
    account.authors = authors
    account.borrowed = stillBorrowedBooks
  })
  return account
}*/

function getBooksPossessedByAccount(account, books, authors) { 
  const result = []; 
  const accoundId = account.id; 
  books.forEach((book) => { 
    const borrowed = book.borrows; 
    const authorId = book.authorId; 
    borrowed.forEach((borrow) => { if (borrow.id === accoundId && !borrow.returned){ 
      authors.forEach ((author) => { if (author.id === authorId) { 
        const allInfo = { ...book, author : author } 
        result.push(allInfo);} 
      
      }); 
    } 
    }); 
  }); 
  return result; 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
