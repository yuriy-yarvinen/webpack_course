# Webpack course

Код из курса по webpack 

-D для разработки тоже что и --save-dev

-S зависимость в проекте

## Comands
```
npm init // инициализация проекта
npm install -D webpack webpack-cli // установка вебпак и вебпак кли

npm i -D html-webpack-plugin // плагин для генерации html и автоматического подключения в него скриптов

npm i -D clean-webpack-plugin // плагин для очистки папки с продакшеном

npm install --save-dev babel-loader @babel/core // babel
npm install --save-dev @babel/preset-env // crossbrowser
npm install --save @babel/polyfill // async await and others pilyfills
npm install --save @babel/plugin-proposal-class-properties // oop js static variables and other
npm install --save-dev @babel/preset-typescript // typescript
npm install --save-dev @babel/preset-react // react

npm install react react-dom // react

npm install -D eslint eslint-loader babel-eslint

npm install --save-dev webpack-bundle-analyzer

npm i -D style-loader css-loader // лоадеры для подключения css

npm i -D sass sass-loader // лоадер scss sass
npm i -D less less-loader // лоадер less

npm i -D file-loader // лоадер для подключения файлов

npm i -D xml-loader // лоадер для xml

npm i -D csv-loader // лоадер для csv

npm i -D webpack-dev-server // сервер, пока не работает

npm i -D copy-webpack-plugin // плагин для копирования файлов

npm i -D mini-css-extract-plugin // плагин для выноса css в отдельный файл

npm i -D cross-env // передача переменных

npm i -D terser-webpack-plugin // плагин для минификации js

npm i -D optimize-css-assets-webpack-plugin // оптимизация css

npm i -S jquery // установка jquery

npm i normalize.css библиотека для адаптации css
```


## package.json
```
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack --mode development",
    "watch": "cross-env NODE_ENV=development webpack --mode development --watch",
    "prod": "cross-env NODE_ENV=production webpack --mode production",
    "analyzer": "webpack --profile --json > stats.json && webpack-bundle-analyzer stats.json"
  },
```

## полезные ссылки

[Webpack](https://webpack.js.org/)
[Babel](https://babeljs.io/)
[Eslint](https://eslint.org/)

