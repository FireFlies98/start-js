const shoppingList = ['apples', 'oranges', 'bananas', 'potatoes', 'carrots'];
let result = 0;
let notpurchased = 0;
const modifiedShoppingList = shoppingList.map((item) => {
    let number;
    let bought = 'yes';
    let priceForOne;
    let sum;
    if (item == 'apples') {
        number = 8;
        bought = 'yes';
        priceForOne = 5;
        sum = number * priceForOne;
    } else if (item == 'oranges') {
        number = 2;
        bought = 'yes';
        priceForOne = 15;
        sum = number * priceForOne;
    } else if (item == 'bananas') {
        number = 6;
        bought = 'no';
        priceForOne = 7;
        sum = number * priceForOne;
    } else if (item == 'potatoes') {
        number = 20;
        bought = 'no';
        priceForOne = 2;
        sum = number * priceForOne;
    } else if (item == 'carrots') {
        number = 3;
        bought = 'no';
        priceForOne = 3;
        sum = number * priceForOne;
    } else if (item == 'onions') {
        number = 10;
        bought = 'no';
        priceForOne = 5;
        sum = number * priceForOne;
    }
    return {
        name: item,
        number,
        bought,
        priceForOne,
        sum,
    };
});
console.log(modifiedShoppingList); 



modifiedShoppingList.forEach((item) => {    //   --->   Завдання 1.1   (Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали)
    if (item.bought == 'no') {
        modifiedShoppingList.reverse();
    };
});


modifiedShoppingList.forEach((item, bought, ) => {   //   --->   Завдання 1.2   (Покупка продуктів. Функція приймає номер продукту і відзначає його як придбаний)
    if (item !== 'carrots') {
        modifiedShoppingList[2].bought = 'yes';   // В залежності від цифри міняється продукт
    };
});


modifiedShoppingList.forEach((item) => {   //   --->   Завдання 1.3  (Вивожу список не придбаних товарів)
    if (item.bought == 'no') {
        console.log(item);
    };
});


const superModifiedShoppingList = modifiedShoppingList.filter((value, index) => index !== 2);   // --->  Завдання 2.1
console.log(superModifiedShoppingList);


// modifiedShoppingList.unshift('onions')    //  --->   Завдання 2.2 (не знаю як правильно)


modifiedShoppingList.forEach((item) => result += item.sum)   //  --->   Завдання 3.1 (знайти суму всіх продуктів)
console.log(result)


modifiedShoppingList.forEach((item) => {   //   --->    Завдання 3.2  (знайти суму всіх не придбаних продуктів)
    if (item.bought == 'no') {
        notpurchased += item.sum
    };
});
console.log(notpurchased)


superModifiedShoppingList.sort((prev, next) => prev.sum - next.sum);   //   --->   Завдання 3.3 (відсортувати від мешого до більшого) (сортував по клонованому масиву тому що над першим масивом проводяться інші операції)
