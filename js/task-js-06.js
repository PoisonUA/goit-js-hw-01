let total = 0;
let input;

do {
  input = prompt('Пожалуйста введите любое число');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  }

  else {
    total += Number(input);
  }
}
while (input !== null);
alert(`Общая сумма чисел равна ${Math.round(total)}`);
