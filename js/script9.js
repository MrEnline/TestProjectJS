const INITIAL_SHIPS = [
    {
        count: 1,
        scheme: [
            [0, 0, 1],
            [1, 1, 1],
        ],
    },
    {
        count: 1,
        scheme: [[1, 1, 1, 1]],
    },
    {
        count: 2,
        scheme: [[1]],
    },
];
const scheme1 = INITIAL_SHIPS[0].scheme;
const scheme2 = INITIAL_SHIPS[1].scheme;
const scheme3 = INITIAL_SHIPS[2].scheme;

function createNewScheme(scheme) {
    return scheme[0].map((col, i) => scheme.map((row) => row[i])).map((value) => value.reverse());
}

console.log(createNewScheme(scheme1));

console.log(createNewScheme(scheme2));

//const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const nums = [1, 1, 2];

function findDuplicates(nums) {
    const dublicatesNums = [];
    const objNums = {};

    nums.forEach((item, index) => {
        if (!(item in objNums)) {
            objNums[item] = 0;
        }
        objNums[item] = objNums[item] + 1;
        if (objNums[item] === 2) {
            dublicatesNums.push(item);
        }
    });

    return dublicatesNums;
}

console.log(findDuplicates(nums));
