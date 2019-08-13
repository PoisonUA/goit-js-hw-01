let input;
let total = 0;

do {
input = prompt("Enter digit");
    if (isNaN(input)) {
        alert("Было введено не число, попробуйте еще раз");
    }
    else {
        total+=+input;
    }
}
while (input!==null);
alert("Общая сумма чисел равна " + total);
