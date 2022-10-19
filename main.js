// --------- Themes -----------//
/* Themes Style Values */


class Theme {
    constructor(bodyBg, headerColor, themeRailBg, themeRailJustifyContent, themeButtonBg,
        resultBg, resultColor, keypadBg, keypadButtonColor, keypadButtonBg, keypadButtonBoxShadow,
        buttonDeleteResetColor, buttonDeleteResetBg, buttonDeleteResetBoxShadow,
        buttonEqualColor, buttonEqualBg, buttonEqualBoxShadow
    ) {
        this.bodyBg = bodyBg;
        this.headerColor = headerColor;
        this.themeRailBg = themeRailBg;
        this.themeRailJustifyContent = themeRailJustifyContent;
        this.themeButtonBg = themeButtonBg;
        this.resultBg = resultBg;
        this.resultColor = resultColor;
        this.keypadBg = keypadBg;
        this.keypadButtonColor = keypadButtonColor;
        this.keypadButtonBg = keypadButtonBg;
        this.keypadButtonBoxShadow = keypadButtonBoxShadow;
        this.buttonDeleteResetColor = buttonDeleteResetColor;
        this.buttonDeleteResetBg = buttonDeleteResetBg;
        this.buttonDeleteResetBoxShadow = buttonDeleteResetBoxShadow;
        this.buttonEqualColor = buttonEqualColor;
        this.buttonEqualBg = buttonEqualBg;
        this.buttonEqualBoxShadow = buttonEqualBoxShadow;

    }
}

const theme3 = new Theme('hsl(268, 75%, 9%)',
    'hsl(52, 100%, 62%)',
    'hsl(268, 71%, 12%)',
    'flex-end',
    'hsl(176, 100%, 44%)',
    'hsl(268, 71%, 12%)',
    'hsl(52, 100%, 62%)',
    'hsl(268, 71%, 12%)',
    'hsl(52, 100%, 62%)',
    'hsl(268, 47%, 21%)',
    '0 4px 0 hsl(290, 70%, 36%)',
    'hsl(0, 0%, 100%)',
    'hsl(290, 70%, 36%)',
    '0 4px hsl(285, 91%, 52%)',
    'hsl(0, 0%, 100%)',
    'hsl(176, 100%, 44%)',
    '0 4px hsl(177, 92%, 70%)')

const theme2 = new Theme('hsl(0, 0%, 90%)',
    'hsl(60, 10%, 19%)',
    'hsl(0, 5%, 81%)',
    'center',
    'hsl(25, 98%, 40%)',
    'hsl(0, 0%, 93%)',
    'hsl(60, 10%, 19%)',
    'hsl(0, 5%, 81%)',
    'hsl(60, 10%, 19%)',
    'hsl(45, 7%, 89%)',
    '0 4px 0 hsl(35, 11%, 61%)',
    'hsl(0, 0%, 100%)',
    'hsl(185, 42%, 37%)',
    '0 4px hsl(185, 58%, 25%)',
    'hsl(0, 0%, 100%)',
    'hsl(25, 98%, 40%)',
    '0 4px hsl(25, 99%, 27%)')

const theme1 = new Theme('hsl(222, 26%, 31%)',
    'hsl(0, 0%, 100%)',
    'hsl(223, 31%, 20%)',
    'flex-start',
    'hsl(6, 63%, 50%)',
    'hsl(224, 36%, 15%)',
    'hsl(0, 0%, 100%)',
    'hsl(223, 31%, 20%)',
    'hsl(221, 14%, 31%)',
    'hsl(30, 25%, 89%)',
    '0 4px 0 hsl(28, 16%, 65%)',
    'hsl(0, 0%, 100%)',
    'hsl(225, 21%, 49%)',
    '0 4px hsl(224, 28%, 35%)',
    'hsl(0, 0%, 100%)',
    'hsl(6, 63%, 50%)',
    '0 4px hsl(6, 70%, 34%)')

let themes = [theme1, theme2, theme3]

/* Change Themes functionality */
// Getting the elements :
let themeButton = document.getElementsByClassName('theme-button')[0];
let body = document.getElementsByTagName('body')[0];
let header = document.getElementsByClassName('header')[0];
let themeRail = document.getElementsByClassName('theme-rail')[0];
let resultPannel = document.getElementsByClassName('result')[0];
let keypad = document.getElementsByClassName('keypad')[0];
let keypadButtons = document.getElementsByClassName('keypad-btn');
let btnDel = document.getElementById('key-Backspace');
let btnReset = document.getElementById('key-reset');
let btnEqual = document.getElementById('key-Enter');

themeButton.addEventListener('keydown',(e) => {e.preventDefault()})

// Change Theme event Handler :
// helper function that only changes the styles
const changeStyles = (nextTheme) => {
    body.style.backgroundColor = themes[nextTheme - 1].bodyBg;

    header.style.color = themes[nextTheme - 1].headerColor;

    themeRail.style.backgroundColor = themes[nextTheme - 1].themeRailBg;
    themeRail.style.justifyContent = themes[nextTheme - 1].themeRailJustifyContent;
    themeButton.style.backgroundColor = themes[nextTheme - 1].themeButtonBg;

    resultPannel.style.backgroundColor = themes[nextTheme - 1].resultBg;
    resultPannel.style.color = themes[nextTheme - 1].resultColor;

    keypad.style.backgroundColor = themes[nextTheme - 1].keypadBg;

    for (let key of keypadButtons) {
        key.style.color = themes[nextTheme - 1].keypadButtonColor;
        key.style.backgroundColor = themes[nextTheme - 1].keypadButtonBg;
        key.style.boxShadow = themes[nextTheme - 1].keypadButtonBoxShadow;
    }


    btnDel.style.color = themes[nextTheme - 1].buttonDeleteResetColor;
    btnDel.style.backgroundColor = themes[nextTheme - 1].buttonDeleteResetBg;
    btnDel.style.boxShadow = themes[nextTheme - 1].buttonDeleteResetBoxShadow;

    btnReset.style.color = themes[nextTheme - 1].buttonDeleteResetColor;
    btnReset.style.backgroundColor = themes[nextTheme - 1].buttonDeleteResetBg;
    btnReset.style.boxShadow = themes[nextTheme - 1].buttonDeleteResetBoxShadow;

    btnEqual.style.color = themes[nextTheme - 1].buttonEqualColor;
    btnEqual.style.backgroundColor = themes[nextTheme - 1].buttonEqualBg;
    btnEqual.style.boxShadow = themes[nextTheme - 1].buttonEqualBoxShadow;
}

// the event handler that changes the theme
function changeTheme(e) {

    const currentTheme = Number(themeButton.value);
    let nextTheme = currentTheme;

    currentTheme === 3 ? nextTheme = 1 : nextTheme += 1; //setting next Theme number
    // changing the current theme number state
    themeButton.value = nextTheme;
    // Changing the Page Styles : 
    return changeStyles(nextTheme)
}

themeRail.addEventListener('click',changeTheme)
//------------------- end Themes Change --------------//
///////////////////////////////////////////////////////////////////////////////////////////


// Binding Keys for a good user experience //

document.addEventListener('keydown', (event) => {
    try {
        document.getElementById(`key-${event.key}`).click()
    } catch {
        // just pass
    }

})
//------------------- Doing Calculations -------------//
let equationScreen = document.getElementById('previous-result'); // the previous calculated value
let resultScreen = document.getElementById('current-value'); // current value on screen

let inputState = true; // true when the user already inputs , false when not


let numberKeys = document.getElementsByClassName('numbers') //keys that hold number values

// Screen styling :
function defaultFormat(numb){
    if(numb.includes('e')){
        return numb
    }
    else{
        return numb.replace(/,/g,'')
    }
    
}
function commaFormat(numb){
    if(numb === 'Infinity'){
        return numb
    }
    if(numb.includes('e')){
        return numb
    }else{
        const numbDefault = Number(defaultFormat(numb));
        return numbDefault.toLocaleString('en-US')
    }
        

}


// show typed operation on screen :
// helper Function


function showOnScreen(e) {
    if(resultScreen.innerHTML.length >= 22 && inputState){
        return
    }

    if(resultScreen.innerHTML === 'Infinity'){
        return
    }
    if (e.target.value === '.') { // prevent more than 1 dot
        if (resultScreen.innerHTML.includes('.')) {
            return
        }
    }
    if (resultScreen.innerHTML[0] == '0') { //replacing the zero if only zero in screen
        resultScreen.innerHTML = e.target.value
    } else {
        if (!inputState) {
            resultScreen.innerHTML = e.target.value
        } else {
            resultScreen.innerHTML += e.target.value
        }
    }
    if(!resultScreen.innerHTML.includes('.')){
        resultScreen.innerHTML = commaFormat(resultScreen.innerHTML)
    } else{
        resultScreen.innerHTML = defaultFormat(resultScreen.innerHTML)
    }
    
    inputState = true;
}
// show the numbers and the dot , operators not includes since they will do diffirent behaviour on the screen
for (numberkey of numberKeys) {
    numberkey.addEventListener('click', showOnScreen)
}

// use delete button and reset :

btnDel.addEventListener('click', (e) => {
    if (inputState) {
        if (resultScreen.innerHTML.length === 1) {
            resultScreen.innerHTML = 0;
        } else {
            resultScreen.innerHTML = resultScreen.innerHTML.slice(0, -1)
        }
    }
})

btnReset.addEventListener('click', () => { //reset
    resultScreen.innerHTML = 0;
    equationScreen.innerHTML = '';
    detailedBoard = false;
})
btnReset.onkeydown = (e) =>{e.preventDefault()}

// Operators Behaviour :

// showing and using the operators:
let plus = document.getElementById('key-+');
let minus = document.getElementById('key--');
let multiply = document.getElementById('key-*');
let divide = document.getElementById('key-/');
let equal = document.getElementById('key-Enter');

const operators = [plus, minus, multiply, divide];

function operations(term1, term2, op) { //helper function that do the calculation: term1 <operator> term2
    switch (op) {
        case '+':
            return term1 + term2;
            break;
        case '-':
            return term1 - term2;
            break;
        case '×':
            return term2 * term1;
            break;
        case '÷':
            if(term2 == 0){
                return 'Infinity'
            }else{
                return term1 / term2;
            }
            
            break;
    }
}


// Simple Mode function : 

function simpleMode(e) { //doing the calculations on simple mode
    if(resultScreen.innerHTML === 'Infinity'){
        return
    }
    if (equationScreen.innerHTML.length === 0 || equationScreen.innerHTML.slice(-1) === '=') {
        equationScreen.innerHTML = defaultFormat(resultScreen.innerHTML) + e.target.value;
        inputState = false
        return
    }
    if (!inputState) { // when we have only term 1 and hitting an operator , we just change the operator
        equationScreen.innerHTML = equationScreen.innerHTML.slice(0, -1) + e.target.value;

    } else { // when we have
        const term1 = equationScreen.innerHTML.slice(0, -1);
        const term2 = defaultFormat(resultScreen.innerHTML)
        const calculationOperator = equationScreen.innerHTML.slice(-1);
        const result = operations(Number(term1), Number(term2), calculationOperator);
        equationScreen.innerHTML = result + e.target.value;
    }
    inputState = false
}

// Equation Mode :

function equationMode() {
    if(resultScreen.innerHTML === 'Infinity'){
        return
    }
    if (equationScreen.innerHTML.length === 0) {
        equationScreen.innerHTML = defaultFormat(resultScreen.innerHTML) + '=';
        inputState = false;
        return
    }
    if (equationScreen.innerHTML.slice(-1) !== '=') {
        const term1 = equationScreen.innerHTML.slice(0, -1);
        const term2 = defaultFormat(resultScreen.innerHTML)
        const calculationOperator = equationScreen.innerHTML.slice(-1);
        const result = operations(Number(term1), Number(term2), calculationOperator);
        equationScreen.innerHTML = `${term1} ${calculationOperator} ${term2} =`;
        resultScreen.innerHTML = commaFormat(result.toString());
        inputState = false;
    } else {
        if (equationScreen.innerHTML.split(' ').length < 2) {
            equationScreen.innerHTML = defaultFormat(resultScreen.innerHTML) + '=';
            inputState = false;
            return
        } else {
            const equation = equationScreen.innerHTML.split(' ');
            const term1 = equation[0];
            const term2 = equation[2];
            const calculationOperator = equation[1];
            const result = operations(Number(defaultFormat(resultScreen.innerHTML)), Number(term2), calculationOperator);
            equationScreen.innerHTML = `${defaultFormat(resultScreen.innerHTML)} ${calculationOperator} ${term2} =`;

            resultScreen.innerHTML = commaFormat(result.toString());

            
            
            inputState = false;
        }
    }
}

for (operator of operators) {
    operator.addEventListener('click', simpleMode)
}

equal.addEventListener('click', equationMode)








