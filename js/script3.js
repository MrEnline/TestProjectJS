
function validParentheses(parens) {
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

  console.log(validParentheses("())("));
  console.log(validParentheses("()()"));
  console.log(validParentheses("(())((()())())"));
  console.log(validParentheses(")"));
  console.log(validParentheses(")("));