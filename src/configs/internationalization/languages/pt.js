export default {
  translation: {
    signIn: {
      submitButton: 'Bora',
      emailLabel: 'E-mail',
      passwordLabel: 'Senha',
      signUpButton: 'Preciso me cadastrar',
      title: 'Cadastro',
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
      signUpButton: 'Não quero me cadastrar',
      title: 'Cadastro',
    },
    books: {
      title: 'Livros',
      addBookButton: 'Adicione um novo livro',

      item: {
        qtdPages: 'Quantidade de páginas:',
        releaseDate: 'Data de lançamento',
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
    addBook: {
      nameLabel: 'Nome',
      authorsNameLabel: 'Nome do autor',
      priceLabel: 'Preço',
      qtdPagesLabel: 'Quantidade de páginas',
      releaseDateLabel: 'Data de lançamento',
      resumeLabel: 'Resumo do livro',
      booksGenreLabel: 'Gênero do livro',
      defaultGenreSelector: 'Selecione um gênero',
      submitButton: 'Adicionar',
    },
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
    addGenre: {
      nameLabel: 'Nome',
      submitButton: 'Adicionar',
    },
  },
};
