## 🔐 Gerador de Senhas Seguras - Aplicativo Mobile

Gerador de Senhas é um aplicativo mobile desenvolvido com React Native e Expo para criar senhas robustas e aleatórias, combinando segurança e usabilidade. O aplicativo permite ao usuário copiar as senhas para a área de transferência, armazená-las localmente e gerenciar a navegação entre as telas de forma simples e intuitiva.

## Funcionalidades
- ✅ Geração Personalizada de Senhas
- ✅ Slider ajustável para escolher entre 6 e 20 caracteres.
- ✅ Combinação aleatória de letras (maiúsculas e minúsculas), números e símbolos.
- ✅ Algoritmo seguro para garantir aleatoriedade verdadeira.

## 📲 Como Funciona
- Ajuste o Tamanho: Escolha entre 6 e 20 caracteres.
- Gere a Senha: Toque em "Gerar" para criar uma senha aleatória.
- Salve ou Copie:
- Salve a senha no dispositivo para acesso futuro.
- Pressione e segure a senha para copiá-la automaticamente.

## 🚀 Tecnologias Utilizadas  

- ⚛️ **React Native v0.76** - Framework para desenvolvimento mobile.  
- 📦 **Expo v52.0** - Facilita o desenvolvimento e a publicação do app.  
- 💾 **AsyncStorage** - Armazena as senhas localmente no dispositivo.  
- 📋 **Clipboard API** - Copia senhas com um clique.  
- 🔀 **React Navigation** - Gerenciamento de navegação entre telas.  
- ⚡ **Custom Hook (useStorage)** - Manipulação simplificada do armazenamento local.  

## 📁 Estrutura do Projeto

```
GERADOR-SENHA
│── .expo
│── types
│   └── router.d.ts
│── devices.json
│── README.md
│── app
│   └── index.tsx
│── assets
│   ├── fonts
│   └── images
│── node_modules
│── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── modal
│   │       └── index.js
│   ├── hooks
│   │   └── useStorage.js
│   ├── pages
│   │   ├── home
│   │   └── passwords
│   │       ├── components
│   │       │   └── passwordItem.js
│   │       └── index.js
│   ├── routes.js
│── .gitignore
│── app.json
│── expo-env.d.ts
│── package-lock.json
│── package.json
└── tsconfig.json
```

## ▶ Como Executar o Projeto
```bash
git clone https://github.com/wesleibl/gerador-senha-react-native
cd gerador-senha

npm install -g expo-cli
npm install
```

Se ainda não tiver algum emulador para executar o teste direto na maquina voce pode usar o Android Studio para isso, aqui tem a documentação: [docs.expo.dev](https://docs.expo.dev/workflow/android-studio-emulator/)

Para iniciar o aplicativo, utilize o comando abaixo. Ele irá abrir o Expo DevTools no seu navegador e você poderá escanear o QR Code com o aplicativo Expo Go no seu dispositivo móvel para testar o aplicativo.

```
npx expo start
```
Se você instalou o Android Studio e fez o procedimento para o emulador corretamente, após o script carregar vai ter a opção do QRcode para usar no seu aparelho pessoal ou pode pressionar a letra "a" e vai abrir o aplicativo no emulador (ele deve estar aberto para que o expo reconheça).

## 👤 Autor  

Desenvolvido por **Weslei Lucas**.  

- 💼 [LinkedIn](https://www.linkedin.com/in/wesleibl/)

Se gostou do projeto, não esqueça de deixar uma ⭐ no repositório! 🚀

## 🌟 Créditos
Projeto baseado na video aula do [Sujeito Programador](https://www.youtube.com/@Sujeitoprogramador)
