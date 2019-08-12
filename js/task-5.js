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

const country1 = "китай";
const country2 = "южная америка";
const country3 = "австралия";
const country4 = "индия";
const country5 = "ямайка";

const pr1 = 100;
const pr2 = 250;
const pr3 = 170;
const pr4 = 80;
const pr5 = 120;

const userInput = prompt("Укажите страну доставки");

if (userInput === null) {
  console.log("Вы нажали отмену, хорошего дня!");
} else {
  const userInputLowerCase = userInput.toLowerCase();

  let price;
  let country;
  let haveCountry;

  switch (userInputLowerCase) {
    case country1:
      price = pr1;
      country = "Китай";
      haveCountry = true;
      break;

    case country2:
      price = pr2;
      country = "Южная Америка";
      haveCountry = true;
      break;

    case country3:
      price = pr3;
      country = "Австралия";
      haveCountry = true;
      break;

    case country4:
      price = pr4;
      country = "Индия";
      haveCountry = true;
      break;

    case country5:
      price = pr5;
      country = "Ямайка";
      haveCountry = true;
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
  if (haveCountry) {
    console.log(`Доставка в ${country} будет сторить ${price}`);
  }
}
