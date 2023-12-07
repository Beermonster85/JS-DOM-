"use strict";

//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

//Решение

//const super_link = document.getElementById ("super_link");
//console.log (super_link.textContent);

//const super_link2 = document.querySelector ("#super_link");
//console.log (super_link2.textContent);

//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

//Решение

//const card_link = document.querySelectorAll (".card-link");
//card_link.forEach(card_link => {
 //   card_link.textContent = "ссылка";  
//});
//console.log (card_link);


//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

//Решение

//const cardA= document.querySelectorAll(".card-body .card-link");
//console.log (cardA);

//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

//Решение

//const dataN = document.querySelector("[data-number]");
//console.log (dataN);


//5. Выведите содержимое тега title в консоль.

//Решение

//const title = document.querySelector("title");
//console.log (title.textContent);

//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

//Решение

//const cardT = document.querySelector(".card-title");
//const elP = cardT.parentNode;
//console.log (elP);

//7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

//Решение

//const tagP = document.createElement('p');
//tagP.textContent = 'Привет';
//document.querySelector('.card').prepend(tagP);


//8. Удалите тег h6 на странице.

//Решение
//document.querySelector('h6').remove();