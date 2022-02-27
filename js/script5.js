function upArray(arr){
    if (arr.length === 0 || [].concat(arr).sort()[0] < 0) 
        return null;
    const strNum = arr.join("");
    let num = BigInt(strNum) + BigInt(1);
    return num.toString().split('').map(item => {
        return Number(item);
    });
}

console.log(upArray([9, 9, 9]));

function upArray1(arr){
    const tmpArr = [].concat(arr).sort((a, b) => a - b);
    if (arr.length === 0 || tmpArr[0] < 0 || tmpArr[tmpArr.length - 1] > 9) 
        return null;
    let overflow = true;    
    const newArr = arr.reverse().map(item => {
        const newItem = (item + overflow) % 10;
        if (newItem !== 0)
            overflow = false;
        return newItem;
    })
    if (overflow) newArr.push(1); 
    return newArr.reverse().map(item => {
        return Number(item);
    });
}

console.log(upArray1([9, 9, 9]));

function upArray2(arr){
    if (arr.length === 0 || arr.filter(item => item < 0 || item > 9).length > 0) 
        return null;
    let overflow = true;    
    const newArr = arr.reverse().map(item => {
        const newItem = (item + overflow) % 10;
        if (newItem !== 0)
            overflow = false;
        return newItem;
    })
    if (overflow) newArr.push(1); 
    return newArr.reverse().map(item => {
        return Number(item);
    });
}

console.log(upArray2([9, 9, 9, 4]));