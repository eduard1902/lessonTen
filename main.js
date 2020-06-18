'use strict';

// Убираем  рекламу
const adv = document.querySelector('.adv');
adv.remove();

// Заменяем картинку заднего фона
const body = document.querySelector('body');
body.setAttribute('style', 'background-image:url(./Image/you-dont-know-js.jpg)');

//Восстановить порядок книг.
const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');

book[0].before(book[1]);
book[2].before(book[4]);
books.append(book[2]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const newBook = document.querySelectorAll('.book ul li')[56];
newBook.insertAdjacentHTML('afterbegin', '<li>Глава 8: За пределами ES6</li>');

//Восстановить порядок глав во второй и пятой книге
const newBookLi = document.querySelectorAll('li');
newBookLi[10].before(newBookLi[12]);
newBookLi[10].prepend(newBookLi[14]);
newBookLi[37].append(newBookLi[45]);
newBookLi[42].append(newBookLi[38]);
newBookLi[44].append(newBookLi[41]);

//Исправить заголовок в книге 3
const newHeader = document.querySelectorAll('.book h2 a');
newHeader[2].textContent = 'Книга 3. this и Прототипы Объектов';

