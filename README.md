<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Jekyll SEO tag -->
  <title>T_Grid20Calc</title>
  <meta name="generator" content="Jekyll v3.10.0" />
  <link rel="canonical" href="https://gridasowa75-hub.github.io/T_Grid20Calc/" />
  <meta property="og:url" content="https://gridasowa75-hub.github.io/T_Grid20Calc/" />

  <link rel="stylesheet" href="/T_Grid20Calc/assets/css/style.css?v=572ecf13d51a95d93ebe71e0787d81204e7e968f">

  <!-- Стили калькулятора -->
  <style>
    .calculator-container {
      max-width: 300px;
      margin: 20px auto;
      padding: 20px;
      background: #f0f0f0;
      border-radius: 10px;
    }
    .display {
      height: 60px;
      font-size: 24px;
      text-align: right;
      padding: 10px;
      background: white;
      margin-bottom: 10px;
      border-radius: 5px;
    }
    .btn {
      width: 60px;
      height: 60px;
      margin: 5px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container-lg px-3 my-5 markdown-body">
    <h1 id="t_grid20calc">T_Grid20Calc</h1>

    <!-- Ваш калькулятор -->
    <div class="calculator-container">
      <div class="display">0</div>
      <div class="buttons">
        <button class="btn" onclick="appendNumber('7')">7</button>
        <button class="btn" onclick="appendNumber('8')">8</button>
        <button class="btn" onclick="appendNumber('9')">9</button>
        <button class="btn" onclick="setOperation('/')">/</button>

        <button class="btn" onclick="appendNumber('4')">4</button>
        <button class="btn" onclick="appendNumber('5')">5</button>
        <button class="btn" onclick="appendNumber('6')">6</button>
        <button class="btn" onclick="setOperation('*')">*</button>

        <button class="btn" onclick="appendNumber('1')">1</button>
        <button class="btn" onclick="appendNumber('2')">2</button>
        <button class="btn" onclick="appendNumber('3')">3</button>
        <button class="btn" onclick="setOperation('-')">-</button>

        <button class="btn" style="width: 130px;" onclick="appendNumber('0')">0</button>
        <button class="btn" onclick="calculate()">=</button>
        <button class="btn" onclick="clearDisplay()">C</button>
      </div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.1.0/anchor.min.js" integrity="sha256-lZaRhKri35AyJSypXXs4o6OPFTbTmUoltBbDCbdzegg=" crossorigin="anonymous"></script>
  <script>anchors.add();</script>

  <!-- JavaScript калькулятора -->
  <script>
    let currentInput = '0';
    let previousInput = '';
    let operation = null;

    function updateDisplay() {
      document.querySelector('.display').textContent = currentInput;
    }

    function appendNumber(number) {
      if (currentInput === '0') {
        currentInput = number;
      } else {
        currentInput += number;
      }
      updateDisplay();
    }

    function setOperation(op) {
      previousInput = currentInput;
      currentInput = '0';
      operation = op;
    }

    function calculate() {
      let result;
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);

      switch (operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }

      currentInput = result.toString();
      operation = null;
      updateDisplay();
    }

    function clearDisplay() {
      currentInput = '0';
      previousInput = '';
      operation = null;
      updateDisplay();
    }

    // Инициализация
    updateDisplay();
  </script>
</body>
</html>
