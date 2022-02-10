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
    
    //Анаграммы - на входе массив слов ['лом', 'мол', 'зов', 'воз'] на выходе [['лом', 'мол'],['зов', 'воз']]
    

    //Скобки
    //'[()]' = true
    //'[(])' = false
    


 
})