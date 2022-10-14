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
let btnDel = document.getElementById('key-del');
let btnReset = document.getElementById('key-reset');
let btnEqual = document.getElementById('key-equal');



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

    const currentTheme = Number(e.target.value);
    let nextTheme = currentTheme;

    currentTheme === 3 ? nextTheme = 1 : nextTheme += 1; //setting next Theme number
    // changing the current theme number state
    e.target.value = nextTheme.toString();
    // Changing the Page Styles : 
    return changeStyles(nextTheme)
}

themeButton.addEventListener('click', changeTheme)
//------------------- end Themes Change --------------//

//------------------- Doing Calculations -------------//

let resetValue = document.getElementsByClassName('result-value')[0];

