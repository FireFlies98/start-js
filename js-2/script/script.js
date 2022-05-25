// Завдання 1.1
const SUM = 0.1 + 0.2;
console.log (+SUM.toFixed(1));

// Завдання 1.2
let a = "1";
let b = 2;
console.log (+a + b);

// Завдання 1.3
const ONE_MB = 1;
const ONE_GB = 1000;
const FILE = 820;
let flash_drive = prompt('Скільки гігабайт має ваша флешка?');
let gb_mb = ONE_GB * flash_drive;
let file = gb_mb / FILE;
console.log (+file.toFixed(0));

alert(`На флешку поміщається ${+file.toFixed(0)} файлів`);


// Завдання 2.1
let purse = prompt('Скільки коштів на вашому шаманці?');
let chocolate = prompt ('Яка ціна однієї шоколадки?');
let pay = purse / chocolate;
let change = pay % chocolate;

alert(`Ви можете купити ${pay.toFixed(0)} шоколадки. Ваша здача становитиме ${change.toFixed(2)}`);

// Завдання 2.2
let three_digit = prompt('Вкажіть любе тризначне число');
let result = 0;

while (three_digit) {
    result *= 10;
    result += three_digit % 10;
    three_digit = Math.floor(three_digit / 10);
}

alert(`Ваше число задом на перед - ${result}`);


// Завдання 3.1
let deposit = prompt('Вкажіть суму депозиту');
// let accrued = (`${deposit}`) * (1 + 0.05) ** 2; -- спрощене обчислення
let accrued = (`${deposit}`) * (1 + (0.05 / 6)) ** 6 * 1;
alert(`Сумма нарахованих відсотків становитиме ${accrued.toFixed(2)}`);

// Завдання 3.2
console.log( 2 && 0 && 3); // Значення І поверне перший оперант який є хибним, в даному випадку хибним є тільки 0, тому воно пропустить 2 і зупиниться на 0, та припине свою роботу
console.log( 2 || 0 || 3); // Значення АБО поверне перший оперант який є істиним, в даному випадку число 2, далі робота скрипта припиняється
console.log(2 && 0 || 3); // Значення буде 3, тому що оператор І має більший пріоритет над АБО і буде вирішуватися першим (в ньому значення буде 0), а вже далі вирішується оператор І який шукає істину (0 || 3 = 3)