// Click handler for search button
const captureSearchValue = () => {
  const input = document.getElementById("search-bar");
  const inputValue = input.value;
  return inputValue;
};

// Filter books based on search input and render filtered books to the DOM
const filterBooks = (SearchValue, books) => {
  const allBooks = flattenObjectValuesIntoArray(books);
  const matchedBooks = [];
  //console.log(SearchValue);
  //console.log(allBooks.length);
  //console.log(allBooks[1].length);
  for (let i = 0; i < allBooks.length; i++) {
    //console.log(i);
    for (let j = 0; j < allBooks[i].length; j++) {
      //console.log(j);
      if (SearchValue === allBooks[i][j]) {
        matchedBooks.push(allBooks[i][0]);
        //console.log(allBooks[i][0]);
      }
    }
    //console.log(flattenObjectValuesIntoArray(books));
  }
  //console.log(matchedBooks);
  return matchedBooks;
};
/*
filterBooks("Robert M. Sapolsky", books);
filterBooks("classic", books);
filterBooks("fantasy", books);
*/
//console.log(filterBooks("fantasy", books));

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (matchedBooks) => {
  const items = [];
  console.log(matchedBooks);
  console.log(books);
  console.log(books[0].title);
  const selectedBooks = [];
  for (let i = 0; i < books.length; i++) {
    matchedBooks.forEach((elements) => {
      if (books[i].title === elements) {
        selectedBooks.push(books[i]);
      }
    });
  }
  console.log(selectedBooks);
  selectedBooks.forEach((elements) => {
    console.log(elements);
    //structureBookAsHtml(elements);
    structureBookAsHtml(elements);
    items.push(structureBookAsHtml(elements));
  });
  renderBooksToDom(items);
};
//structureBooksAsHtml(filterBooks("fantasy", books));

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  const search = captureSearchValue();
  const filter = filterBooks(search, books);
  structureBooksAsHtml(filter);
};

// Grab search button from the DOM

// Attach an event listener to the search button
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler(books);
});
