"use strict";
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(
//   findBestEmployee({
// ann: 29,
// david: 35,
// helen: 1,
// lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// ---------------------------------------------------------------------------

// const findBestEmployee = function(employees) {
//   const arrEmployeers = Object.keys(employees);

//   let best = 0;
//   let name;

//   for (let key of arrEmployeers) {
//     if (best < employees[key]) {
//       best = employees[key];
//       name = key;
//     }
//   }
//   return name;
// };
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38
//   })
// );

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4
//   })
// );

// console.log(
//   findBestEmployee({
// ann: 29,
// david: 35,
// helen: 1,
// lorence: 99,
//   }),
// );

// // ------------------ object.entries (это что-то страшное, лучше не смотрите, это я себе на память оставлю)
// const emp = {
//   ann: 29,
//   david: 35,
//   helen: 111,
//   lorence: 299
// };


// let best = 0;

// const arrNew = Object.entries(emp);

// for (let i = 0; i < arrNew.length; i += 1) {
//   // console.log(arrNew[i])

//   for (let j = 0; j < arrNew[i].length; j += 1) {
//     //   console.log(arrNew[i])
//     if (best < arrNew[i][j]) {
//       best = arrNew[i];
//     }
//   }
// }

// console.log(best);


// ---------------------------------------------------
// Вариант Генадия... OMG...я сломалась..  
// const emp = {
//     ann: 29,
//     david: 35,
//     helen: 111,
//     lorence: 299
//   };
  
//   let best;

// // for (const prop in obj) {
//     // if( obj.hasOwnProperty( prop ) ) {
//         const findBestEmployee = employees => {
//             const entries = Object.entries(employees);
//             if (entries.length === 0) return 0;
//             let best = entries[0][0];
//             if (entries.length === 1) return best;
//             for (let i = 1; i < entries.length; i += 1) {
//             best = entries[i][1] > employees[best] ? entries[i][0] : best;
//             }
//             return best;
//             };
//     // }
//     // }
//     console.log(best);