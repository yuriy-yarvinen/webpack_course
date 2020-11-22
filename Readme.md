Comands
npm init // инициализация проекта
npm install -D webpack webpack-cli // установка вебпак и вебпак кли

-D для разработки тоже что и --save-dev
-S зависимость в проекте

npm i -D html-webpack-plugin // плагин для генерации html и автоматического подключения в него скриптов

npm i -D clean-webpack-plugin // плагин для очистки папки с продакшеном

npm i -D style-loader css-loader // лоадеры для подключения css

npm i -D sass sass-loader // лоадер scss sass

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

//// 
package.json
"scripts": {
  "dev": "webpack --mode development",
  "watch": "webpack --mode development --watch",
  "prod": "webpack --mode production"
},


