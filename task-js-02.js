const total = 100;
let ordered = 0;
ordered = prompt("Введите требуемое колличество товара");
if(ordered<=total) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
}
else {
    console.log("На складе недостаточно твоаров!");
}
