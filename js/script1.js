window.addEventListener('DOMContentLoaded', () => {

    //Задание AAABBBCCD => A3B3C2D
    let inputText = prompt("Введите набор символов");

    if (inputText.length === 1) {
        console.log(inputText);
    }else if (inputText.length > 1) {
        let symb = inputText[0];
        let count = 1;
        let outputStr = '';
        for(let i = 0; i <= inputText.length - 1; i++) {
            if (symb == inputText[i + 1]) {
                count++;
            } else {
                outputStr += count != 1 ? symb + count :  symb;
                count = 1;
            }
            symb = inputText[i + 1];
        }
        console.log(outputStr);
        alert(outputStr);
    }

    //Проверить фразу на палиндром
    inputText = prompt("Введите фразу");
    let result = false;  
    if (inputText.length < 3) {
        alert('Данная фраза не является палиндромом');
    } else {
        for (let i = 0; i < inputText.length / 2; i++) {
            if (inputText[i] == inputText[inputText.length - 1 - i]) {
                result = true;
            } else {
                result = false; 
                break; 
            }
        }
   
        if (result) {
            alert('Фраза является палиндромом');
        } else {
            alert("Фраза не является палиндромом");
        }
    }


    //второй вариант палиндрома
    const phrasePalindrom = "dom mod";
    function checkPhrasePalindrom(phrase) {
        const _phrase = phrase.toLowerCase().replace(" ", "").split("").reverse();
        return phrase.toLowerCase().replace(" ", "").split("").every((item, index) => {
            return _phrase[index] === item;
        })
        // const test = phrase.toLowerCase().replace(" ", "").split("");
        // return test === _phrase;
    }

    let result = checkPhrasePalindrom(phrasePalindrom);
    if (result) {
        console.log("Фраза является палиндромом");
    } else {
        console.log("Фраза не является палиндромом");  
    }
    
    //Анаграммы - на входе массив слов ['лом', 'мол', 'зов', 'воз', 'ком', 'мок','ток'] 
    //на выходе [['лом', 'мол'],['зов', 'воз'],['ком', 'мок'],['ток', 'кот'], [бот]]
    const words = ['лом', 'мол', 'зов', 'воз', 'ком', 'мок','ток', 'кот', 'бот'];

    function sortAnagrams(arr) {
        // сгруппируем анаграммы в хеш-таблице
        const mapWords = arr.reduce((acc, str) => {
          const key = str.split('').sort().join('');
          if (acc[key]) {
              acc[key].push(str);
          } else {
              acc[key] = [str];
          }
          return acc;
        }, {});
        // приводим хеш-таблицу обратно к массиву
        // return Object.keys(map).reduce((acc, key) => {
        //   return acc.concat(map[key]);
        // }, []);
      }

      const resultArr = sortAnagrams(words);
      console.log(resultArr);

    //Скобки
    // '[()]' = true
    // '[(])' = false

})