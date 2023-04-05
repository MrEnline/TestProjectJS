//Есть отсортированный массив интов и есть числа - надо найти начальный индекс элемента равного этому числу и конечный.
//Числа могут повторяться.
//Усложнение: решить с `log n` сложностью.

const arrSortNumbers = [1, 4, 10, 12, 22, 34, 34, 78, 100];
const arrNumbers = [10, 34];

function getIndex(arrNumbers) {
    const objIndex = {};
    for (let i = 0; i < arrNumbers.length; i++) {
        if (!objIndex[arrNumbers[i]]) {
            objIndex[arrNumbers[i]] = [];
        } else {
            continue;
        }
        const index = searchIndex(arrNumbers[i]);

        if (index > -1) {
            objIndex[arrNumbers[i]].push(index);
        }
        if (index !== arrSortNumbers.length - 1 && arrSortNumbers[index + 1] === arrNumbers[i]) {
            objIndex[arrNumbers[i + 1]].push(index + 1);
        } else {
            objIndex[arrNumbers[i]].push(index);
        }
    }
    return objIndex;
}

function searchIndex(number) {
    let startIndex = 0;
    let endIndex = arrSortNumbers.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (arrSortNumbers[middleIndex] === number) {
            return middleIndex;
        } else if (arrSortNumbers[middleIndex] < number) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    return -1;
}

console.log(getIndex(arrNumbers));

console.log('test');
