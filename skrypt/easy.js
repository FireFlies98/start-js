let name = 'Vadym Edgarov';
let Name = 'Vadym Edgarov';
let NAME = 'Vadym Edgarov';


// коментування коду
/* коментування 
коду */

// Стилі написання імен змінних: let, var, const;



//Завдання 2.1
let yourName = prompt('What is your name?');
alert(`Hello, ${yourName}`);

//Завдання 2.2
const now = 2022;
let yourBirthday = prompt('В якому році ти народився(лась)?');
let age = now - yourBirthday;
alert(`Тобі ${age}`);

//Завдання 2.3
let length = prompt('яка довжина одної з сторін квадрата(назви любе число)');
let square = length * 4;
alert(`${square} - периметр твого квадрата`);



//Завдання 3.1
const p = 3.14;
let lengthCircle = prompt('Який радіус кола (придумай любе число)');
let squareCircle = p * (lengthCircle * lengthCircle);
alert(`${squareCircle} - площа твого круга`);

//Завдання 3.2
let distance = prompt('Вкажи відстань в км між двома містами');
let time = prompt('За скільки годин ти хочеш дістатися до потрібного тобі міста?');
let v = distance/time;
alert(`Тобі потрібно рухатися зі швидкістю ${v}км/год, щоб дістатися до місця назначення вчасно`);