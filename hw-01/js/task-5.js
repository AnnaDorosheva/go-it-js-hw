"use strict";
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// -------------------------------------------------------------------------------------


// const country1 = "Китай";
// const country2 = "Чили";
// const country3 = "Австралия";
// const country4 = "Индия";
// const country5 = "Ямайка";

// const pr1 = 100;
// const pr2 = 250;
// const pr3 = 170;
// const pr4 = 80;
// const pr5 = 120;

// const userInput = prompt("Укажите страну доставки");
// let userInputLowerCase;

// if (userInput === null) {
//   console.log("Вы нажали отмену, хорошего дня!");
// } else {

// //НАПИСАЛА->
// userInputLowerCase = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

//   let price;
//   let country;
//   let haveCountry;

//   switch (userInputLowerCase) {
//     case "Китай":
//       price = pr1;
//       country = country1;
//       haveCountry = true;
//       break;

//     case "Чили":
//       price = pr2;
//       country = country2;
//       haveCountry = true;
//       break;

//     case "Австралия":
//       price = pr3;
//       country = country3;
//       haveCountry = true;
//       break;

//     case "Индия":
//       price = pr4;
//       country = country4;
//       haveCountry = true;
//       break;

//     case "Ямайка":
//       price = pr5;
//       country = country5;
//       haveCountry = true;
//       break;

//     default:
//       alert("В вашей стране доставка не доступна");
//   }
//   if (haveCountry) {
//     console.log(`Доставка в ${country} будет сторить ${price}`);
//   }
// }


// userChoise = userChoise[0].toUpperCase() + userChoise.slice(1).toLowerCase();