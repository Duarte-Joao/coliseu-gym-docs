export default {
  title: "Coliseum Gym - Documentação",
  description: "Documentação oficial do sistema Coliseum Gym",

  themeConfig: {
    nav: [
      { text: "Início", link: "/" },
      { text: "Introdução", link: "/introducao" },
      { text: "Descrição", link: "/descricao-projeto" },
      { text: "Requisitos", link: "/requisitos" },
      { text: "Casos de Uso", link: "/casos-uso" },
      { text: "Classes", link: "/classes" },
      { text: "Protótipos", link: "/prototipos" }
    ],

    sidebar: [
      {
        text: "Documentação",
        items: [
          { text: "Introdução", link: "/introducao" },
          { text: "Descrição do Projeto", link: "/descricao-projeto" },
          { text: "Requisitos", link: "/requisitos" },
          { text: "Casos de Uso", link: "/casos-uso" },
          { text: "Diagrama de Classes", link: "/classes" },
          { text: "Protótipos de Telas", link: "/prototipos" },
          { text: "Cronograma", link: "/cronograma" },
          { text: "Riscos", link: "/riscos" },
          { text: "Custos", link: "/custos" },
          { text: "Considerações Finais", link: "/consideracoes" }
        ]
      }
    ]
  }
};
