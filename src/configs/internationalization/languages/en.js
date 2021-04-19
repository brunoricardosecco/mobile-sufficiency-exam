export default {
  translation: {
    signIn: {
      emailLabel: 'E-mail',
      passwordLabel: 'Password',
      submitButton: "Let's go",
      signUpButton: 'I need to sign up',
      title: 'Login',
      alert: {
        title: 'Empty fields',
        message: 'Please, fill all the fields',
        confirmButton: 'Ok',
      },
    },
    signUp: {
      submitButton: 'Done',
      emailLabel: 'E-mail',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Password confirmation',
      cancelButton: "I don't need to signup anymore",
      title: 'Sign Up',
      alert: {
        title: 'Empty fields',
        message: 'Please, fill all the fields',
        confirmButton: 'Ok',
      },
      alertDifferentPasswords: {
        title: 'Different fields',
        message: 'The password and password confirmation need to be equals',
        confirmButton: 'Ok',
      },
    },
    books: {
      title: 'Books',
      addBookButton: 'Add a book',

      item: {
        qtdPages: 'Pages quantity:',
        releaseDate: 'Release date:',
        resume: 'Resume',
        showResumeButton: 'Show resume',
        hideResumeButton: 'Hide resume',
        editButton: 'Edit',
        deleteButton: 'Delete',
        confirmDelete: {
          title: 'Confirmation',
          message: 'Do you really want to delete this item?',
          cancelButton: 'Cancel',
          confirmButton: 'Yes!',
        },
      },
    },
    bookForm: {
      nameLabel: 'Name',
      authorsNameLabel: "Autho's name",
      priceLabel: 'Price',
      qtdPagesLabel: 'Page quantity',
      releaseDateLabel: 'Release date',
      resumeLabel: "Book's resume",
      bookGenreLabel: "Book's genre",
      defaultGenreSelector: 'Select a genre',
      createButton: 'Add',
      editButton: 'Edit',
      alert: {
        title: 'Empty fields',
        message: 'Please, fill all the fields',
        confirmButton: 'Ok',
      },
    },
    addBook: 'Add a book',
    editBook: 'Edit a book',
    genres: {
      title: 'Genres',
      addGenreButton: 'Add a new genre',
      item: {
        editButton: 'Edit',
        deleteButton: 'Delete',
        confirmDelete: {
          title: 'Confirmation',
          message: 'Do you really want to delete this item?',
          cancelButton: 'Cancel',
          confirmButton: 'Yes!',
        },
        cantDelete: {
          title: "You can't do that",
          message:
            "This genre have a relation with a book, so you can't delete him",
          confirmButton: 'Ok',
        },
      },
    },
    genreForm: {
      nameLabel: 'Name',
      createButton: 'Add',
      editButton: 'Edit',
      alert: {
        title: 'Empty fields',
        message: 'Please, fill all the fields',
        confirmButton: 'Ok',
      },
    },
    addGenre: 'Add genre',
    editGenre: 'Edit genre',
    logout: 'Logout',
  },
};
