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
    about: {
      title: 'Sobre',
      author: 'Desenvolvedor',
      subTitle:
        'Projeto desenvolvido para o exame de suficiência da matéria de desenvolvimento de aplicações móveis da Universidade Técnológica Federal do Paraná',
      appUsage: 'Uso do aplicativo',
      usageText:
        'O aplicativo possui funcionaliades de visualiazação, edição, adição e exclusão de livros, bem como possui as mesma funcionalidades para gêneros de livros. Na aba de livros, o usuário pode efetuar as ações de exclusão e leitura de livros, e para a funcionalidade de adição o aplicativo fornece um botão ao topo que levará o usuário a tela de adição de livro contendo o formulário de informações. Para a funcionalidade de edição, cada livro possui um botão de edição que leva o usuário a tela de formulário de livro par que as informações sejam alteradas e posteriormente salvas. O mesmo fluxo se repete para os gêneros de livros em sua aba no menu de baixo.',
    },
    logout: 'Sair',
  },
};
