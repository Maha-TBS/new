// Book data
const books = [
    {
      title: 'Book 1',
      author: 'Author A',
      genre: 'Fiction',
      description: 'Description of Book 1.',
      image: 'book1.jpg',
      // Add more book details as needed
    },
    // Add more book objects
  ];
  
  // Function to display books
  function displayBooks() {
    const booksSection = document.querySelector('.books');
    booksSection.innerHTML = '';
  
    books.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
  
      const bookImg = document.createElement('img');
      bookImg.src = book.image;
      bookImg.alt = book.title;
  
      const bookTitle = document.createElement('h3');
      bookTitle.textContent = book.title;
  
      bookCard.appendChild(bookImg);
      bookCard.appendChild(bookTitle);
  
      bookCard.addEventListener('click', () => showBookDetails(index));
  
      booksSection.appendChild(bookCard);
    });
  }
  
  // Function to show book details
  function showBookDetails(index) {
    const bookDetailsSection = document.getElementById('book-details');
    bookDetailsSection.innerHTML = '';
  
    const selectedBook = books[index];
  
    const bookDetails = document.createElement('div');
    bookDetails.innerHTML = `
      <h2>${selectedBook.title}</h2>
      <p>Author: ${selectedBook.author}</p>
      <p>Genre: ${selectedBook.genre}</p>
      <p>${selectedBook.description}</p>
      <!-- Add more details as needed -->
    `;
  
    bookDetailsSection.appendChild(bookDetails);
    bookDetailsSection.classList.add('active');
  }
  
  // Display books when the page loads
  displayBooks();
  