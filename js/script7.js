//Есть отсортированный массив интов и есть числа - надо найти начальный индекс элемента равного этому числу и конечный.
//Числа могут повторяться.
//Усложнение: решить с `log n` сложностью.

const arrSortNumbers = [1, 4, 10, 12, 22, 34, 34, 34, 34, 34, 34, 78, 100];
const arrNumbers = [10, 34, 25];

function getIndexSimple(arrNumbers) {
    const objIndex = {};
    for (let num of arrNumbers) {
        if (objIndex[num]) {
            continue;
        }
        objIndex[num] = [];
        arrSortNumbers.reduce((acc, curr, index, arr) => {
            if (num === curr && (acc !== curr || curr !== arr[index + 1])) {
                objIndex[num].push(index);
            }
            acc = curr;
            return acc;
        }, -1);
        if (objIndex[num].length === 1) {
            objIndex[num].push(objIndex[num][0]);
        }
    }
    return objIndex;
}

console.log(getIndexSimple(arrNumbers));

function searchIndexes(number) {
    const objIndex = {};

    if (number.length < 1) {
        return;
    }

    for (let i = 0; i < number.length; i++) {
        if (objIndex[number[i]]) {
            continue;
        }

        objIndex[number[i]] = [];

        const firstIndex = getFirstIndex(number[i]);

        if (firstIndex === -1) {
            continue;
        }

        objIndex[number[i]].push(firstIndex);

        const lastIndex = getLastIndex(number[i]);

        if (lastIndex === -1) {
            objIndex[number[i]].push(firstIndex);
        }

        objIndex[number[i]].push(lastIndex);
    }

    return objIndex;
}

function getFirstIndex(number) {
    let startIndex = -1;
    let endIndex = arrSortNumbers.length - 1;

    while (startIndex + 1 < endIndex) {
        const index = startIndex + Math.floor((endIndex - startIndex) / 2);
        if (arrSortNumbers[index] < number) {
            startIndex = index;
        } else {
            endIndex = index;
        }
    }

    if (arrSortNumbers[endIndex] === number) {
        return endIndex;
    }

    return -1;
}

function getLastIndex(number) {
    startIndex = 0;
    endIndex = arrSortNumbers.length;

    while (startIndex + 1 < endIndex) {
        const index = startIndex + Math.floor((endIndex - startIndex) / 2);
        if (arrSortNumbers[index] <= number) {
            startIndex = index;
        } else {
            endIndex = index;
        }
    }

    if (arrSortNumbers[startIndex] === number) {
        return startIndex;
    }

    return -1;
}

console.log(searchIndexes(arrNumbers));

const sum = 7990;
const banknotes1 = [5000, 500, 1000, 100, 50, 10];

function getExcangeBancknotes(sum, banknotes1) {
    let balance = sum;
    const sortedBanknotes = banknotes1.sort((a, b) => b - a);
    if (sum % sortedBanknotes[sortedBanknotes.length - 1]) {
        return undefined;
    }
    return sortedBanknotes.reduce((acc, banknote) => {
        acc[banknote] = Math.floor(balance / banknote);
        balance = balance - acc[banknote] * banknote;
        return acc;
    }, {});
}
console.log(getExcangeBancknotes(sum, banknotes1));
