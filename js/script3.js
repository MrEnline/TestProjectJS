
//мой вариант
function _validParentheses(parens) {
    const pattern = "()";
    let _parens = parens;
    if (parens === "" || parens === "()")
        return true;
    while(true) {
        if (_parens.indexOf(pattern) === -1)
            return false;
        _parens = _parens.replace(pattern, "");
        if (_parens.length === 0)
            return true;      
    };
  }

  //чужой вариант - более быстрый
  function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

  console.log(validParentheses("())("));
  console.log(validParentheses("()()"));
  console.log(validParentheses("(())((()())())"));
  console.log(validParentheses(")"));
  console.log(validParentheses(")("));