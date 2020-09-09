// Complete the isBalanced function below.
function isBalanced(s) {
    var array = s.split('')
    for (let index = 0; index < array.length; index++) {
        //Inicializo las variables a utilizar
        let item = array[index];
        let itemAnt = "";
        let itemSig = "";
        //Compruebo que haya datos en la posicion anterior y posterior
        if (index + 1 < array.length)
            itemsig = array[index + 1];
        if (index > 0)
            itemAnt = array[index - 1]

        //Dependiendo el signo se evalua cual es el siguiente requerido
        switch (item) {
            case '{': {
                if (itemSig == '}') {
                    array.splice(index, 2);
                    index = 0;
                }
                break;
            }
            case '(': {
                if (itemSig == ')') {
                    array.splice(index, 2);
                    index = 0;
                }
                break;
            }
            case '[': {
                if (itemSig == ']') {
                    array.splice(index, 2);
                    index = 0;
                }
                break;
            }
            case '}': {
                if (itemAnt == '{') {
                    array.splice(index - 1, 2);
                    index = 0;
                }
                break;
            }
            case ')': {
                if (itemAnt == '(') {
                    array.splice(index - 1, 2);
                    index = 0;
                }
                break;
            }
            case ']': {
                if (itemAnt == '[') {
                    array.splice(index - 1, 2);
                    index = 0;
                }

                break;
            }
            default: {
                break;
            }
        }

    }
    //Si al final del proceso el array esta vacio, esta balanceado
    if (array.length > 0)
        return 'NO'

    return 'YES'
}

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');