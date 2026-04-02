// Функция перевода из двоичной системы с подробным решением
function convertBinaryToDecimal(binaryStr) {
    let decimal = 0;
    const digits = binaryStr.split('').reverse();

    // Вычисление десятичного значения
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === '1') {
            decimal += Math.pow(2, i);
        }
    }

    // Формирование пошагового решения с LaTeX-форматированием
    let steps = [];
    for (let i = digits.length - 1; i >= 0; i--) {
        const power = digits.length - 1 - i;
        const digit = digits[digits.length - 1 - i];
        steps.push(`${digit} \\times 2^{${power}}`);
    }

    return `$${binaryStr}_2 = ${steps.join(' + ')} = ${decimal}_{10}$`;
}

// Функция перевода из шестнадцатеричной системы с подробным решением
function convertHexToDecimal(hexStr) {
    const decimal = parseInt(hexStr, 16);

    // Пошаговое решение для шестнадцатеричной системы
    const digits = hexStr.split('').reverse();
    let steps = [];

    for (let i = 0; i < digits.length; i++) {
        const digitValue = parseInt(digits[i], 16);
        steps.push(`${digitValue} \\times 16^{${i}}`);
    }

    return `$${hexStr}_{16} = ${steps.reverse().join(' + ')} = ${decimal}_{10}$`;
}

// Универсальная функция для разных систем счисления
function convertNumber(numStr, base) {
    const decimal = parseInt(numStr, base);
    let baseName;

    switch (base) {
        case 2: baseName = 'двоичной'; break;
        case 8: baseName = 'восьмеричной'; break;
        case 16: baseName = 'шестнадцатеричной'; break;
        default: baseName = `${base}-ичной`;
    }

    return `Число $${numStr}$ в ${baseName} системе = ${decimal}_{10}`;
}

// Дополнительная функция для восьмеричной системы (если понадобится)
function convertOctalToDecimal(octalStr) {
    const decimal = parseInt(octalStr, 8);

    // Пошаговое решение для восьмеричной системы
    const digits = octalStr.split('').reverse();
    let steps = [];

    for (let i = 0; i < digits.length; i++) {
        steps.push(`${digits[i]} \\times 8^{${i}}`);
    }

    return `$${octalStr}_8 = ${steps.reverse().join(' + ')} = ${decimal}_{10}$`;
}
