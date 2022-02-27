
document.addEventListener('DOMContentLoaded', () => {

    //Sum Strings as Numbers

    function sumStrings(a,b) { 
        let overflow = 0, i = 0, result = [];
        const length = Math.max(a.length, b.length)
        const aStr = a.padStart(length, 0);
        const bStr = b.padStart(length, 0);
        while(i < length) {
        let tmp = (Number(aStr[length - i - 1]) + Number(bStr[length - i - 1]) + overflow).toString();
        result.push(tmp[tmp.length - 1])
        overflow = tmp.length > 1;
        i++;
        }
        if (overflow) result.push(Number(overflow).toString());
        return result.reverse().join('').replace(/^[0]+/gi, "");
    }

    //чужое решение
    function sumStrings1(a, b) {
        const length = Math.max(a.length, b.length);
        const aNum = a.padStart(length, 0);
        const bNum = b.padStart(length, 0);
        
        const {overflow, result} = aNum.split('').reverse().reduce((sum, curVal, curInd) => {
            const bCurVal= bNum[length - curInd - 1]; //получим индекс второй строки с конца
            const tmpResult = Number(curVal) + Number(bCurVal) + sum.overflow;
            return {
                result: `${(tmpResult % 10)}${sum.result}`,
                overflow: tmpResult / 10 >= 1
            }
        }, {overflow: false, result: ""});
        //result.split('').reverse().join();
        const finalResult = overflow ? `1${result}` : result;
        return finalResult.replace(/^[0]+/, "");
    }
    console.log(sumStrings1("781", "2456"));

    //еще одно решение
    function sumStrings2(a, b) {
        var res = '', c = 0;
        a = a.split('');
        b = b.split('');
        while (a.length || b.length || c) {
          c += ~~a.pop() + ~~b.pop();
          res = c % 10 + res;
          c = c > 9;
        }
        return res.replace(/^0+/, '');
      }
      console.log(sumStrings2("781", "2456"));
})

