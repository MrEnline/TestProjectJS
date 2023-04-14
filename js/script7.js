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

function searchFirstIndex(number) {
    let startIndex = -1;
    let endIndex = arrSortNumbers.length - 1;

    // while (startIndex + 1 < endIndex) {
    //     const index = startIndex + Math.floor((endIndex - startIndex) / 2);
    //     if (arrSortNumbers[index] < number) {
    //         startIndex = index;
    //     } else {
    //         endIndex = index;
    //     }
    // }

    // if (arrSortNumbers[endIndex] === number) {
    //     return endIndex;
    // }
    // return -1;
    if (number.length < 1) {
        return;
    }

    for (let i = 0; i < number.length; i++) {
        while (startIndex + 1 < endIndex) {
            const index = startIndex + Math.floor((endIndex - startIndex) / 2);
            if (arrSortNumbers[index] < number[i]) {
                startIndex = index;
            } else {
                endIndex = index;
            }
        }

        if (arrSortNumbers[endIndex] === number[i]) {
            return endIndex;
        }
        return -1;
    }
}

console.log(searchFirstIndex(arrNumbers));
