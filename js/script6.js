//Задача № 1.
//Частный случай анаграмма-перевертыш
//На входе массив слов ['пот', 'лом', 'мол', 'зов', 'воз', 'топ'] на выходе [['лом', 'мол'],['зов', 'воз']]

const arrWords = ['пот', 'лом', 'ток', 'мол', 'зов', 'воз', 'кот', 'топ', 'апорт', 'тропа'];

const obj = arrWords.reduce((result, curr, index) => {
    result[curr] = index;
    return result;
}, {});

const anagramms = arrWords.reduce((result, curr, index) => {
    const reverseWord = curr.split('').reverse().join('');
    if (obj[reverseWord] > -1 && index !== obj[reverseWord]) {
        obj[curr] = obj[reverseWord];
        result.push([curr, reverseWord]);
    }
    return result;
}, []);

console.log(anagramms);

//Общий случай с анаграммами, когда из слова можно получить другое слово
const arrWords1 = ['пот', 'лом', 'ток', 'мол', 'зов', 'воз', 'озв', 'кот', 'топ', 'апорт', 'тропа', 'дерево'];
const anagramms1 = arrWords1
    .map((value) => {
        return value.split('').sort().join('');
    })
    .reduce((result, curr, index, arr) => {
        const findInd = arr.findIndex((value) => value === curr);
        findInd > -1 && index !== findInd ? result.push([arrWords1[index], arrWords1[findInd]]) : result;
        return result;
    }, []);
console.log(anagramms1);

//Хавролевский вариант
const arrWords2 = ['пот', 'лом', 'ток', 'мол', 'зов', 'воз', 'кот', 'топ', 'корыто', 'озв'];

function getAnograms(array) {
    const anograms = array.reduce((acc, word) => {
        const orderedCharacters = word.split('').sort().join('');

        if (acc[orderedCharacters]) {
            acc[orderedCharacters].push(word);
        } else {
            acc[orderedCharacters] = [word];
        }

        return acc;
    }, {});

    return Object.values(anograms).filter((items) => items.length > 1);
}

console.log(getAnograms(arrWords2));

//Общий случай с анаграммами, когда из слова можно получить другое слово
const arrWords3 = ['пот', 'лом', 'ток', 'мол', 'зов', 'воз', 'озв', 'кот', 'топ', 'апорт', 'тропа', 'дерево'];

const anagramms3 = arrWords3
    .map((value) => {
        return value.split('').sort().join('');
    })
    .sort();
console.log(anagramms3);

//Задача № 2.
//Палиндром. Проверить фразу на палиндром

const word = 'калаш';
const isPalindrom = word === word.split('').reverse().join('');
console.log(isPalindrom ? 'Слово-палиндром' : 'Слово не является палиндромом');

//второй вариант
const word1 = 'Лёша на полке клопа нашёл';
const formatWord = word1.toLowerCase().split(' ').join('');
const isPalindrom1 = formatWord === formatWord.split('').reverse().join('');
console.log(isPalindrom1 ? 'Фраза-палиндром' : 'Фраза не является палиндромом');

//Задача № 3.
//(03).Купюры;
//На входе сумма и необходимо разменять на купюры.
//Усложнение количество купюр ограниченно.

const summa = 5670;
//const banknots = [10, 50, 100, 500, 1000, 5000];
const banknotes = [1000, 500, 100, 50, 10];

const exChangeBanknotes1 = banknotes.reduce((result, curr) => {
    const ostatok = result.length > 0 ? summa - result.reduce((sum, value) => sum + value) : summa;
    let numBanknotes = Math.trunc(ostatok / curr);
    while (numBanknotes >= 1) {
        result.push(curr);
        numBanknotes--;
    }
    return result;
}, []);

console.log(exChangeBanknotes1);

//второй вариант
function exchangeBanknotes(sum) {
    if (sum % banknotes[banknotes.length - 1] > 0) {
        return;
    }
    return banknotes.reduce((result, curr) => {
        const balance = result.length > 0 ? summa - result.reduce((sum, value) => sum + value) : summa;
        let numBanknotes = Math.trunc(balance / curr);
        while (numBanknotes >= 1) {
            result.push(curr);
            numBanknotes--;
        }
        return result;
    }, []);
}

const result = exchangeBanknotes(summa);

//третий вариант
function exchangeBanknotes(sum) {
    if (sum % banknotes[banknotes.length - 1] > 0) {
        return;
    }
    const balance = banknotes.reduce((result, curr) => {
        return result;
    }, []);
    return balance;
}

const result1 = exchangeBanknotes(summa);

//Вариант Хавроля
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

//5-я задача 'AAABBBCCD'=>'A3B3C2D'

str = 'AAABBBBCCDААFKKKD';
function getNumberRepeatSymbols(str) {
    const objSymbols = str.split('').reduce(
        (result, symbol, index, arr) => {
            index !== 0 && arr[index] !== arr[index - 1] ? result.indexArr++ : result.indexArr;
            if (index === 0 || arr[index] !== arr[index - 1]) {
                result[result.indexArr] = [symbol];
            } else {
                result[result.indexArr].push(symbol);
            }
            return result;
        },
        { indexArr: 0 }
    );
    delete objSymbols.indexArr;
    return Object.values(objSymbols)
        .map((value) => {
            return value.length > 1 ? value[0] + value.length : value[0];
        })
        .join('');
}

console.log(getNumberRepeatSymbols(str));

//второе решение попроще
function getNumberRepeatSymbols1(str) {
    const arr = str.split('');
    let count = 1;
    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            count = count + 1;
        } else {
            count !== 1 ? (newStr = newStr + arr[i] + count) : (newStr = newStr + arr[i]);
            count = 1;
        }
    }
    return newStr;
}

console.log(getNumberRepeatSymbols1(str));

//третье решение попроще
function getNumberRepeatSymbols2(str) {
    const arr = str.split('');
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            arr[i] = '';
            count = count + 1;
        } else {
            if (count !== 1) {
                arr[i] = arr[i] + count;
            }
            count = 1;
        }
    }
    return arr.join('');
}

console.log(getNumberRepeatSymbols2(str));

//'[()]' = true
//'[(])' = false

str = '[[(((()))])]';

function checkString(str) {
    const arrSymbols = str.split('');
    if (arrSymbols.length % 2 > 0) return false;

    for (let i = arrSymbols.length / 2 - 1; i >= 0; i--) {
        const left = arrSymbols[i];
        const right = arrSymbols[arrSymbols.length - 1 - i];
        if (!(left + right == '[]' || left + right == '()')) return false;
    }

    return true;
}

console.log(checkString(str));
