// exercitiul 1

let badKids = "Lista copiilor pedepsiti este urmatoarea: Manuela, Daniel, Vicentiu";
console.log(`Lista copiilor nemodificati: ${badKids}`);
const copilulRau = badKids.includes("Daniel");
console.log("Daniel se afla pe lista copiilor pedepsiti?", copilulRau);

badKids = badKids.replace("Daniel", "Gigel");
console.log(`Lista copiilor modificati:, ${badKids}`);


//exercitiul 2

const testGrades = "9.80/6.85/9.10/7.80/8.20";
//.map(Number) converteste string-ul de array in array
const testGradesArray = testGrades.split("/").map(Number);
console.log("Mediile adunate", testGradesArray);
const suma = (testGradesArray.reduce((prevValue, currentValue) =>
    prevValue + currentValue / testGradesArray.length * 100 / 100, 0));
console.log("Media aritmetica este:", suma);

// exercitiul 3
const props = {
    nume: 'Minge fotbal Nike T90',
    price: 220,
    currency: "RON",
    brand: "Nike"
};

const { nume, price, currency } = props;

console.log(`Produsul ${nume}, are pretul de ${price} ${currency}`);

// exercitiul 4
const additionalProps = {
    isAvailable: true
};

const obiectNou = { ...props, ...additionalProps };
console.log(obiectNou);

// exercitiul 5
const buletin = "5010609357778";

const buletinRegex = /^[1-8][0-9]{2}(0[1-9]|1[0-2])([0-9][0-9])(0[1-9]|[1-4][0-9]|5[0-2])([0-9]{3})([0-9])$/gi;

const testString = "5010609357778";
if (buletinRegex.test(testString)) {
    console.log(`Stringul ${testString} este conform sablonului/expresiei regulate`);
} else {
    console.log(`Stringul ${testString} nu este conform sablonului/expresiei regulate`);
}

// extra de la mine 
function cnpInfo(buletin) {
    const gender = buletin.substring(0, 1);
    const an = buletin.substring(1, 3);
    const luna = buletin.substring(3, 5);
    const zi = buletin.substring(5, 7);
    const judet = buletin.substring(7, 9);
    const nnn = buletin.substring(9, 12);
    const control = buletin.substring(12, 13);
    console.log(gender, an, luna, zi, judet, nnn, control);
}

cnpInfo(buletin);

// exercitiul 1 extra

function multiply(string, ...args) {
    if (string === "Inmultire") {
        return args.reduce((prevValue, currentValue) => prevValue * currentValue, 1);
    } else if (string === "Adunare") {
        return args.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    } else if (string === "Scadere") {
        return args.reduce((prevValue, currentValue) => prevValue - currentValue);
    } else if (string === "Impartire") {
        return args.reduce((prevValue, currentValue) => prevValue / currentValue);
    }
}

console.log(multiply("Inmultire", 2, 2, 4));
console.log(multiply("Adunare", 1, 4, 7, 8));
console.log(multiply("Scadere", 8, 2, 4, 4));
console.log(multiply("Impartire", 8, 2, 4));


// exercitiul 2 extra

const values = [-1, 100, -500, 2, 3, 4, 5];

console.log(Math.min(...values));
// extra de la mine daca tot am folosit pt min sa fie si pt max :D
console.log(Math.max(...values));
