let credits;
let pricePerDroid;
let orderQty;
let totalPrice;
credits = 23580;
pricePerDroid = 3000;


orderQty = prompt("Сколько дроидов вы хотите заказать?");
totalPrice = orderQty*pricePerDroid;
if (orderQty===null) {
    console.log("Отменено пользователем!");
    }
    else if (isNaN(orderQty) || orderQty<=0) {
        console.log("Вы указали неверное количество товара!");
    }
    else if (totalPrice>credits) {
        console.log("Недостаточно средств на счету!");
    }
    else if (totalPrice<=credits) {
        console.log("Вы купили", orderQty, "дроидов, на счету осталось", credits-totalPrice, "кредитов.");
    }