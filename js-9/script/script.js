        //  Завдання 1

class Circle {
    constructor(r, D) {
        this.r = r;
        this.D = D;
    };

    get Radius() {
        return this.r;
    };

    set Radius(Diameter) {
        this.r = Diameter / 2;
    };

    get Diameter() {
        return this.D = this.r * 2;
    };

    square() {
        let S = 3.14 * (this.r * this.r);
        console.log('square:', S.toFixed(1));
    };

    lenght() {
        let C = 3.14 * this.D;
        console.log('lenght:', C.toFixed(1));
    };

}

const newCircle = new Circle(5);        //  ----->  Поле що зберігає радіус кола (можна міняти)

console.log('diametr of the circle =' ,newCircle.Diameter, 'radius of the circle =' ,newCircle.Radius);   //  ---> діаметр та радіус кола;

newCircle.square();          //    ---->     Площа кола
newCircle.lenght();          //    ---->     Довжина кола





        //  Завдання 2

class Marker {
    constructor (color) {
        this.color = color;
        this.filling = 100;
    }

    markerWork() {
        let TEXT = prompt('Write the text :)');
        let P = document.createElement('p');
        document.body.appendChild(P);
        P.style.color = this.color;
        let TAPE = TEXT.replace(/\s/g, '');

        if (this.filling > TAPE.length/2) {
            P.textContent = TEXT;
            this.filling -= TAPE.length/2;
            console.log(`Еhe amount of ink in your marker = ${this.filling}`);
        } else {
            console.log('You dont have enough ink to write something');
            let SUBTAPE = TEXT.substring(0, this.filling*2);
            TAPE = SUBTAPE.replace(/\s/g, '');
            let UNUSEDINK = SUBTAPE.lenght - TAPE.lenght;

            if (UNUSEDINK == 0) {
                P.textContent = SUBTAPE;
            } else {
                SUBTAPE = TEXT.substring(0, this.filling*2 + UNUSEDINK);
                P.textContent = SUBTAPE + `...`;
            }
            alert('Ink is out :(');
            this.filling = 0;
        }
    }
};

let blueMarker = new Marker('blue');
blueMarker.markerWork();