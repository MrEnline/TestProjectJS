window.addEventListener('DOMContentLoaded', () => {
       //
    // function one(res) {
    //     const a = 1;
    //     if (res == undefined) {
    //         return a;
    //     }
    //     return plus(res, a);
    // };
    
    // function two(res) {
    //     const a = 2;
    //     if (res == undefined) {
    //         return a;
    //     }
    //     return plus(res, a);
    // };

    // function plus(a, b = 0) {
    //     return a + b;
    // }

    // function minus(a, b = 0) {
    //     return b - a;
    // }

    // function operation(res, num) {
    //     switch (res.name) {
    //         case "plus":
    //             return plus(res.result, num).result;
    //         case "minus":
    //             return minus(res.result, num).result;
    //         case "times":
    //             return times(res.result, num).result;
    //         case "dividedBy":
    //             return dividedBy(res.result, num).result;        
    //     }
    // }

    // function retResult(res, a) {
    //     if (res == undefined) {
    //         return a;
    //     }
    //     return operation(res, a);
    // }

    

    // function zero(res) {
    //     return retResult(res, 0);
    // };

    // function one(res) {
    //     return retResult(res, 1);
    // };
    
    // function two(res) {
    //     return retResult(res, 2);
    // };

    // function three(res) {
    //     return retResult(res, 3);
    // };

    // function four(res) {
    //     return retResult(res, 4);
    // };

    // function five(res) {
    //     return retResult(res, 5);
    // };

    // function six(res) {
    //     return retResult(res, 6);
    // };

    // function seven(res) {
    //     return retResult(res, 7);
    // };

    // function eight(res) {
    //     return retResult(res, 8);
    // };
    
    // function nine(res) {
    //     return retResult(res, 9);
    // };


    // function plus(a, b = 0) {
    //     return {
    //         name: "plus",
    //         result: a + b
    //     };
    // }

    // function minus(a, b = 0) {
    //     return {
    //         name: "minus",
    //         result: b == 0 ? b - a : b + a
    //     };
    // }

    // function times(a, b = 1) {
    //     return {
    //         name: "times",
    //         result: a * b
    //     };
    // }

    // function dividedBy(a, b = -1) {
    //     if (a === 0)
    //         throw "divide by zero";
    //     return {
    //         name: "dividedBy",
    //         result: b == -1 ? a : Math.floor((b / a))
    //     };
    // }

    // console.log(one(plus(two()))); // must return 0
    // console.log(seven(times(five()))); // must return 35
    // console.log(four(plus(nine()))); // must return 13
    // console.log(eight(minus(three()))); // must return 5
    // console.log(six(dividedBy(two()))); // must return 3
    // console.log(zero(dividedBy(two()))); // must return 0
    // console.log(six(dividedBy(zero()))); //must return exception


    //другой вариант - более простой

    function five(operation) {
        if (operation) {
            const result = operation(5)
            return result;
        }
        return 5;
    }

    function seven(operation) {
        if (operation) {
            return operation(7);
        }
        return 7;
    }

    function plus(a) {
        return (b) => a + b; //вовзращает функцию в которую будет подставляться значение
    }

    function minus(a) {
        //вовзращает функцию в которую будет подставляться значение
        return function(b) {
            return b - a;
        };
    }

    console.log(five(plus(seven())));
    console.log(seven(minus(five())));
})