# FECAF ECOMERCE - Catálogo Mobile Interativo

Este projeto consiste em um aplicativo mobile responsivo desenvolvido como entrega final para a disciplina de Mobile Development na UniFECAF. A aplicação funciona como um catálogo interativo de loja online, integrando navegação avançada, gerenciamento de estado global e consumo de API REST real.

## Funcionalidades Obrigatórias Implementadas
* Tela de Login: Simulação de autenticação com validação de campos e armazenamento temporário de dados do usuário.
* Listagem de Produtos com Tabs: Organização por categorias (Masculino e Feminino) utilizando navegação por abas.
* Consumo de API: Integração via Axios com a API DummyJSON para busca dinâmica de produtos.
* Tela de Detalhes: Exibição detalhada de nome, descrição, preço, desconto e imagem do produto selecionado.
* Logout Funcional: Botão para encerrar a sessão e limpar os dados armazenados.

## Tecnologias Utilizadas
* React Native com Expo.
* Axios: Para requisições HTTP e consumo de API externa.
* Redux Toolkit: Para gerenciamento de estado global e persistência de dados do usuário.
* React Navigation: Implementação de fluxos de Stack e Tab Navigation.

## Estrutura de Pastas (Boas Práticas)
O projeto segue uma arquitetura modular para garantir a separação entre lógica de negócio, estilização e renderização de componentes:
/src
  /assets        # Recursos estáticos e identidade visual (Logo FECAF Ecommerce)
  /components    # Componentes reutilizáveis (ProductCard)
  /screens       # Telas: Login, HomeScreen (Tabs) e ProductDetail
  /services      # Configuração do Axios (api.js)
  /store         # Slices e configuração do Redux Toolkit
  /routes        # Definição do fluxo de navegação

## Como Executar
1. Certifique-se de possuir o Node.js instalado em sua máquina.
2. Instale as dependências do projeto através do terminal:
   npm install
3. Inicie o servidor do Expo:
   npx expo start
4. Utilize o aplicativo Expo Go em seu dispositivo móvel para escanear o QR Code gerado.