    // Завдання 1.1
// let age = +prompt('Скільки вам років?');
// if (age < 12) {
//     alert('Ви дитина');
//   } else if (age < 18) {
//     alert('Ви підліток');
//   } else if (age < 59) {
//     alert('Ви дорослий');
//   } else  if (age >59 ) {
//     alert('Привіт пенсіонер');
//   };

  // Завдання 1.2
//   let number = +prompt('Вкажіть число від 0 до 10');
//   if (number == 0) {
//       alert(')');
//   } else if (number == 1) {
//       alert('Ваш спецсимвол - !');
//   } else if (number == 2) {
//       alert('Ваш спецсимвол - @');
//   } else if (number == 3) {
//       alert('Ваш спецсимвол - #');
//   } else if (number == 4) {
//       alert('Ваш спецсимвол - $');
//   } else if (number == 5) {
//       alert('Ваш спецсимвол - %');
//   } else if (number == 6) {
//       alert('Ваш спецсимвол - ^');
//   } else if (number == 7) {
//       alert('Ваш спецсимвол - &');
//   } else if (number == 8) {
//       alert('Ваш спецсимвол - *');
//   } else if (number == 9) {
//       alert('Ваш спецсимвол - (');
//   };

  // Завдання 1.3
// alert('Привіт, тобі потріьно ввести два будьяких числа для того щоб я міг підрахувати сумму всіх чисел в заданому тобою діапазоні');
// let number_one = +prompt('Введи перше число');
// let number_two = +prompt('введи друге число');
// let result_number = 0;
// for (let a = number_one; a <= number_two; a ++) {
//     result_number += a;
// };
// if (number_two < number_one) {
//     for (let a = number_two; a <= number_one; a ++) {
//         result_number += a;
//     };
// };
// alert(`Сума всіх чисел в заданому діапазоні - ${result_number}`);

    // Завдання 1.4
// let one = +prompt('Введи перше число');
// let two = +prompt('Введи друге число');
// let NSD = 1;
// for (let i = 2; i <= two; i ++) {
//     if ((one % i) == 0 && (two % i) == 0) {
//         NSD = i;
//         alert(NSD);
//     };
// };

    // Завдання 1.5
// let numeric = +prompt('Введіть своє число');
// for (n = 1; n < numeric; n ++)  {
//     if (numeric % n == 0) {
//         console.log(n);
//     };
// };


    // Завдання 2.2
// let sum = +prompt('Вкажіть суму покупки');
// if (sum < 200) {
//         alert(`До сплати ${sum}`);
//     } else if (sum <= 300) {
//         discount = sum * 3 / 100;
//         alert(`До сплати ${discount - sum}, ваша знижка становить 3%`);
//     } else if (sum <= 500) {
//         discount = sum * 5 / 100;
//         alert(`До сплати ${discount - sum}, ваша знижка становить 5%`);
//     }  else if (sum > 500) {
//         discount = sum * 7 / 100;
//         alert(`До сплати ${discount - sum}, ваша знижка становить 7%`);
//     };

    // Завдання 2.4
// const DAYS = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Субота', 'Неділя'];
// let weekDays = 0;

// while (confirm(`${DAYS[weekDays]}. Хочеш побачити наступний день?`)) {
//   weekDays = (weekDays + 1) % DAYS.length;
// }
