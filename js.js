const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
let theme = 'light';

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => {
        if (text === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else if (text === 'C') {
            display.textContent = '0';
        } else {
            if (display.textContent === '0') {
                display.textContent = text;
            } else {
                display.textContent += text;
            }
        }
    });
    return button;
}

function toggleTheme() {
    if (theme === 'light') {
        calculator.classList.remove('light-theme');
        calculator.classList.add('dark-theme');
        theme = 'dark';
    } else {
        calculator.classList.remove('dark-theme');
        calculator.classList.add('light-theme');
        theme = 'light';
    }
}

function init() {
    const buttonValues = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'C', '0', '=', '+'
    ];

    buttonValues.forEach(value => {
        const button = createButton(value);
        calculator.querySelector('.buttons').appendChild(button);
    });
}

init();
