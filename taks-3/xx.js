// Pamiętaj, że można robić przypisania w stylu:
// x = x + y
// czyli: oblicz sumę x + y a następnie zapisz w zmiennej x
// przypisania w stylu jak wyzej można zapisać krócej:
// x = x + y <=> x += y
// x = x - y <=> x -= y
// x = x * y <=> x *= y
// x = x / y <=> x /= y

// Funkcja do potęgowania:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
// Można by oczywiście zrobić x * x zamiast Math.pow(x, 2)

// Wersja dosyć "kuloodporna"
// Array.isArray(): https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// Number(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// isNaN(): https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN
function sumSquares(inputArray) {
    var i, x, sum = 0;
    // Czy argument funkcji jest faktycznie tablicą
    if (Array.isArray(inputArray)) {
        for (i = inputArray.length; i >= 0; --i) {
            // Próba zrzutowania elementu tablicy na typ liczbowy
            x    = Number(inputArray[i]);
            // Jeśli x nie jest liczbą dodaj zero do sumy a jak nie to kwadracik
            sum += isNaN(x) ? 0 : Math.pow(x, 2);
        }
    }

    return sum;
}

// Pętla for...in - uwaga, jest tricky
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in
function sumSquares(inputArray) {
    var i, sum = 0;
    for (i in inputArray) {
        sum += Math.pow(inputArray[i], 2);
    }

    return sum;
}

// Pętla for...of - nowość w ES6, może nie działać na niektórych przeglądarkach
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of
function sumSquares(inputArray) {
    var i, sum = 0;
    for (i of inputArray) {
        sum += Math.pow(i, 2);
    }

    return sum;
}

// Stara jara pętla for
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for
function sumSquares(inputArray) {
    var i, sum = 0;
    for (i = 0; i < inputArray.length; ++i) {
        sum += Math.pow(inputArray[i], 2);
    }

    return sum;
}

// Tak samo stara jara pętla while
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while
function sumSquares(inputArray) {
    var i = 0, sum = 0;
    while (i < inputArray.length) {
        sum += Math.pow(inputArray[i], 2);
        ++i;
    }

    return sum;
}

// Trochę zabawy z umieszczeniem inkrementacji indexu
// Obczaj sobie róznicę między pre- i post(in/de)krementacją (++i, i++, --i, i--)
function sumSquares(inputArray) {
    var i = 0, sum = 0;
    while (i < inputArray.length) {
        sum += Math.pow(inputArray[i++], 2);
    }

    return sum;
}

// Pętla do...while
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/do...while
function sumSquares(inputArray) {
    var i = 0, sum = 0;
    // No niestety trzeba najpierw sprawdzić, bo pętla do...while
    // zawsze ma przynajmniej jedną iterację i w przypadku pustej tablicy
    // byłby jakiś fikuśny błąd
    if (inputArray.length > 0) {
        do {
            sum += Math.pow(inputArray[i], 2);
            ++i;
        } while (i < inputArray.length);
    }

    return sum;
}

// Jednolinijkowy smaczek z wykorzystaniem Math bez użycia pętli
// Math.hypot(): https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
// Function.prototype.apply(): https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
function sumSquares(inputArray) {
    return Math.pow(Math.hypot.apply(null, inputArray), 2);
}

// Wypisanie do konsoli:
console.log(sumSquares([0, 1, 2, 3, 4, 5]));
// ... lub
var input = [0, 1, 2, 3, 4, 5];
console.log(sumSquares(input));

// Mam nadzieje, że nie musze wspominać, że trzeba zostawić tylko jedną definicję sumSquares? :P