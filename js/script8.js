//есть отсортированный массив [-3, -1, 0, 2, 6]
//найти сумму заданного числа
//при отсутствии вернуть пустой массив

const sortArray = [-3, -1, 0, 2, 6];
//const sortArray = [2, 3, 4];

function getSumNumbers(sum) {
    let left = 0;
    let right = sortArray.length - 1;
    const resultArray = [];

    while (left !== right) {
        if (sum === sortArray[left] + sortArray[right]) {
            resultArray.push(sortArray[left]);
            resultArray.push(sortArray[right]);
            return resultArray;
        }

        sum > sortArray[left] + sortArray[right] ? left++ : right--;

        // if (sum > sortArray[left] + sortArray[right]) {
        //     left++;
        // } else {
        //     right--;
        // }
    }
    return resultArray;
}

console.log(getSumNumbers(6));

const customArray = [2, 7, 11, 15];
//const customArray = [3, 2, 4];

function getSumNumbers1(sum) {
    const resultArray = [];
    const mapPairs = new Map();

    for (let i = 0; i < customArray.length; i++) {
        const secondNumber = sum - customArray[i];

        if (mapPairs.get(secondNumber)) {
            resultArray.push(secondNumber);
            resultArray.push(customArray[i]);
            return resultArray;
        }

        if (!mapPairs.get(customArray[i])) {
            mapPairs.set(customArray[i], secondNumber);
        }
    }

    return resultArray;
}

console.log(getSumNumbers1(21));
