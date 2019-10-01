const texts = lang => {
  switch (lang) {
    case 'pt-BR':
    default:
      return {
        titles: {
          mainBlock: {
            title: 'Solicitar orçamento',
            subtitle:
              'Nossos serviços são aplicados somente em itens de tecido'
          },
          servicesBlock: {
            title: 'Selecione o serviço desejado'
          },
          itensBlock: {
            title:
              'Selecione o item para aplicação do serviço'
          }
        },
        services: {
          impermeabilization: 'Impermeabilização',
          higienization: 'Limpeza'
        }
      }
  }
}

export { texts }
