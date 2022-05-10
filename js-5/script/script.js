const myCar = {
    producer: 'Німетчина',
    model: 'Audi',
    graduationYear: 2017,
    averageSpeed: 120,
    tank: 82,
    averageСonsumption: 13,
    information: function () {
        console.log(myCar);
    },
    addDriver: {
        driverName: 'Вася Пупкін',
        driverAge: 23,
    },
    gasStation: function() {
        let gasoline = this.tank / this.averageСonsumption;
        let maxrange = gasoline * 100;
        console.log(`На повному баці в ${this.tank} літри машина без заправки може проїхати ${maxrange.toFixed(0)} км`);
    },
    road: function() {
        let distance = +prompt('Вкажіть відстань яку необхідно подолати');
        let time = distance / this.averageSpeed;
        let gasoline = this.tank / this.averageСonsumption;
        let maxrange = gasoline * 100;
        function timeOnTheRoad() {
            if (time > 4) {
                time += 1
            } else if (time > 9) {
                time += 2
            } else if (time > 14) {
                time += 3
            } else if (time > 19) {
                time += 4
            };
            return time;
        }
        console.log(`Для подолання цієї відстані вам знадобиться ${time.toFixed(0)} годин з урахуванням зупинок кожних 4 години якщо шлях буде довгим. Водій ${driver.driverName} має право керувати даним транспортним засобом`);
        if (distance > maxrange) {
            console.log('Ця поїздка потребує більше палива ніж є у вашому топливному баку, тому по дорозі потрібно буде здійснити дозаправку')
        }
    }
};

let driver = {
    driverName: 'Вася Пупкін',
    driverAge: 23,
};




myCar.information();  // --->  виводить інформацію про машину
// myCar.addDriver();    // --->  водій, який має право керувати даним транспортним засобом
myCar.gasStation();   // --->  заправка
myCar.road();         // --->  визначення часу поїздки, водія та пального


