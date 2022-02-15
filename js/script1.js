window.addEventListener('DOMContentLoaded', () => {

    // //Задание AAABBBCCD => A3B3C2D
    // let inputText = prompt("Введите набор символов");

    // if (inputText.length === 1) {
    //     console.log(inputText);
    // }else if (inputText.length > 1) {
    //     let symb = inputText[0];
    //     let count = 1;
    //     let outputStr = '';
    //     for(let i = 0; i <= inputText.length - 1; i++) {
    //         if (symb == inputText[i + 1]) {
    //             count++;
    //         } else {
    //             outputStr += count != 1 ? symb + count :  symb;
    //             count = 1;
    //         }
    //         symb = inputText[i + 1];
    //     }
    //     console.log(outputStr);
    //     alert(outputStr);
    // }

    // //Проверить фразу на палиндром
    // inputText = prompt("Введите фразу");
    // let result = false;  
    // if (inputText.length < 3) {
    //     alert('Данная фраза не является палиндромом');
    // } else {
    //     for (let i = 0; i < inputText.length / 2; i++) {
    //         if (inputText[i] == inputText[inputText.length - 1 - i]) {
    //             result = true;
    //         } else {
    //             result = false; 
    //             break; 
    //         }
    //     }
   
    //     if (result) {
    //         alert('Фраза является палиндромом');
    //     } else {
    //         alert("Фраза не является палиндромом");
    //     }
    // }


    // //второй вариант палиндрома
    // const phrasePalindrom = "dom mod";
    // function checkPhrasePalindrom(phrase) {
    //     const _phrase = phrase.toLowerCase().replace(" ", "").split("").reverse();
    //     return phrase.toLowerCase().replace(" ", "").split("").every((item, index) => {
    //         return _phrase[index] === item;
    //     })
    //     // const test = phrase.toLowerCase().replace(" ", "").split("");
    //     // return test === _phrase;
    // }

    // result = checkPhrasePalindrom(phrasePalindrom);
    // if (result) {
    //     console.log("Фраза является палиндромом");
    // } else {
    //     console.log("Фраза не является палиндромом");  
    // }
    
    // //Анаграммы - на входе массив слов ['лом', 'мол', 'зов', 'воз', 'ком', 'мок','ток'] 
    // //на выходе [['лом', 'мол'],['зов', 'воз'],['ком', 'мок'],['ток', 'кот'], [бот]]
    // const words = ['лом', 'мол', 'зов', 'воз', 'ком', 'мок','ток', 'кот', 'бот'];

    // function sortAnagrams(arr) {
    //     // сгруппируем анаграммы в хеш-таблице
    //     const mapWords = arr.reduce((acc, str) => {
    //       const key = str.split('').sort().join('');//разбиваем слово на символы, сортируем и собираем в слово - ключ
    //       if (acc[key]) {
    //           acc[key].push(str);
    //       } else {
    //           acc[key] = [str];
    //       }
    //       return acc;
    //     }, {});
    //     return Object.values(mapWords);
    //     // приводим хеш-таблицу обратно к массиву
    //     // return Object.keys(map).reduce((acc, key) => {
    //     //   return acc.concat(map[key]);
    //     // }, []);
    // }

    // const resultArr = sortAnagrams(words);
    // console.log(resultArr);

    // 03. Купюры
    //     На входе сумма и необходимо разменять на купюры. 
    //     Усложнение: количество купюр ограниченно. 

    

    //06. Скобки
    // '[()]' = true
    // '[(])' = false
    const str = "[](()";
    function isCorrectHook(str) {
        let stack = [];
        let ch = "";
        const result = false;
        for(let i = 0; i < str.length; i++) {
            if (str[i] === "(" || str[i] === "[") {
                stack.push(str[i]);
            } else {
                ch = stack.pop();
                // if (str[i] === ")") {
                //     if (ch !== "(") {
                //         return result;
                //     }
                // }
                // if (str[i] === "]") {
                //     if (ch !== "[") {
                //         return result;
                //     }
                // }
                if (str[i] === ")" && ch !== "(" || str[i] === "]" && ch !== "[") {
                    return result;
                }
            }
        } 
        if (stack.length === 0) return true;
        return result;
    }
    console.log(isCorrectHook(str));

    

})