'use strict'
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// -----------------------------------------------------------------------------------

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // добавить поле mood со значением 'happy'
// user.mood = 'happy';

// // заменяем значение hobby на 'javascript'
// user.hobby = 'javascript';

// // заменяет значение premium на false
// user.premium = false;
// console.log(user);

// // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const showObject = function (obj) {

//   for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// };

// showObject(user);