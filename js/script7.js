//Есть отсортированный массив интов и есть числа - надо найти начальный индекс элемента равного этому числу и конечный.
//Числа могут повторяться.
//Усложнение: решить с `log n` сложностью.

const arrSortNumbers = [1, 4, 10, 12, 22, 34, 34, 34, 34, 34, 34, 78, 100];
const arrNumbers = [10, 34];

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
            objIndex[num].push();
        }
    }
    return objIndex;
}

console.log(getIndexSimple(arrNumbers));

function getIndex(arrNumbers) {
    const objIndex = {};
    for (let num of arrNumbers) {
        if (objIndex[num]) {
            continue;
        }
        objIndex[num] = [];
        const index = searchIndex(num);
        objIndex[num].push(index);
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
            startIndex = middleIndex;
        } else {
            endIndex = middleIndex;
        }
    }

    return -1;
}

console.log(getIndex(arrNumbers));
