export default {
  translation: {
    signIn: {
      emailLabel: 'E-mail',
      passwordLabel: 'Senha',
      submitButton: 'Bora',
      signUpButton: 'Preciso me cadastrar',
      title: 'Login',
      alert: {
        title: 'Campo vazio',
        message:
          'Por favor, preencha todos os campos para entrar no aplicativo.',
        confirmButton: 'Beleza',
      },
    },
    signUp: {
      submitButton: 'Pronto',
      emailLabel: 'E-mail',
      passwordLabel: 'Senha',
      confirmPasswordLabel: 'Confirme a senha',
      cancelButton: 'Não quero me cadastrar',
      title: 'Cadastro',
      alert: {
        title: 'Campo vazio',
        message:
          'Por favor, preencha todos os campos para entrar no aplicativo.',
        confirmButton: 'Beleza',
      },
      alertDifferentPasswords: {
        title: 'Campo diferentes',
        message: 'A confirmação de senha deve ser igual a senha.',
        confirmButton: 'Beleza',
      },
    },
    books: {
      title: 'Livros',
      addBookButton: 'Adicione um novo livro',

      item: {
        qtdPages: 'Quantidade de páginas:',
        releaseDate: 'Data de lançamento:',
        resume: 'Resumo',
        showResumeButton: 'Mostrar resumo',
        hideResumeButton: 'Ocultar resumo',
        editButton: 'Editar',
        deleteButton: 'Excluir',
        confirmDelete: {
          title: 'Confirmação',
          message: 'Você tem certeza que deseja excluir esse item?',
          cancelButton: 'Cancelar',
          confirmButton: 'Sim',
        },
      },
    },
    bookForm: {
      nameLabel: 'Nome',
      authorsNameLabel: 'Nome do autor',
      priceLabel: 'Preço',
      qtdPagesLabel: 'Quantidade de páginas',
      releaseDateLabel: 'Data de lançamento',
      resumeLabel: 'Resumo do livro',
      bookGenreLabel: 'Gênero do livro',
      defaultGenreSelector: 'Selecione um gênero',
      createButton: 'Adicionar',
      editButton: 'Atualizar',
      alert: {
        title: 'Campo vazio',
        message:
          'Por favor, preencha todos os campos para entrar no aplicativo.',
        confirmButton: 'Beleza',
      },
    },
    addBook: 'Adicionar livro',
    editBook: 'Editar livro',
    genres: {
      title: 'Gêneros',
      addGenreButton: 'Adicione um novo gênero',
      item: {
        editButton: 'Editar',
        deleteButton: 'Excluir',
        confirmDelete: {
          title: 'Confirmação',
          message: 'Você tem certeza que deseja excluir esse item?',
          cancelButton: 'Cancelar',
          confirmButton: 'Sim',
        },
        cantDelete: {
          title: 'Não é possível',
          message:
            'Você não pode deletar esse item pois esta relacionado com um livro.',
          confirmButton: 'Ok',
        },
      },
    },
    genreForm: {
      nameLabel: 'Nome',
      createButton: 'Adicionar',
      editButton: 'Atualizar',
      alert: {
        title: 'Campo vazio',
        message:
          'Por favor, preencha todos os campos para entrar no aplicativo.',
        confirmButton: 'Beleza',
      },
    },
    addGenre: 'Adicionar gênero',
    editGenre: 'Editar gênero',
    logout: 'Sair',
  },
};
