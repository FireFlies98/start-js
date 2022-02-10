    // Завдання 1.1
function logName () {   // ---> function declaration
    // Тіло функції;
};
const GET_NAME = function () {   // ---> function expression
    // Тіло фенкції;
};
func = () => {   /// ---> Cтрілочна функція
    // Тіло функції;
};

    // Завдання 1.2
function withoutParams () {
    console.log ('Arguments ==', arguments );
};
withoutParams (1, 5, 7, 13, 60, 554, 'vadik');

    // Завдання 1.3
function twoNumber (number_One, number_Two) {
    if (number_One > number_Two) {
        console.log(1);
    } else if (number_One < number_Two) {
        console.log(-1);
    } else if (number_One == number_Two) {
        console.log(0);
    };
};
twoNumber(+prompt('Введіть будь-яке число'), +prompt('Введіть будь-яке друге число'));

    // Завдання 1.4
let how = +prompt('Введіть число');
function factorial(n) {
    return (n != 0) ? n * factorial(n - 1) : 1;
};
alert( +factorial(how) );
  
    // Завдання 1.5
function number (num_one, num_two, num_three) {
    console.log(num_one, num_two, num_three);   // --->  Вадіант 1
};
number(1, 4, 9);
function numberTwo (num_four, num_five, num_six) {
    console.log(num_four, num_five, num_six);   // --->  Варіант 2
};
numberTwo('1'+'4'+'9');

    // Завдання 1.6
function lengthWidth (length, width) {
    if (side_one = length, side_two = width) {
        square = length * width;
        console.log(square);
    } else if (side_two = 1) {
        square = length * 4;
        console.log(square);
    } else if (side_one = 1) {
        square = width * 4;
        console.log(square);
    };
};
let side_one = +prompt('Вкажіть довжину');
let side_two = +prompt('Вкажіть ширину');
lengthWidth(lkj, mnb);


    // Завдання 2.1
let numeric = +prompt('Введіть своє число');
let sum = n;
function difvsuhv () {
     for (n = 1; n < numeric; n ++)  {
        if (numeric % n == 0) {
            sum = n;
        };
    };
    // sum == numeric ? console.log('yes') : console.log('no')
    if (sum += numeric) {
        return console.log('yep')
    } else if (sum != numeric) {
        return console.log('no')
    }
}



    // Завдання 2.2
