const credits = 23580;
const pricePerDroid = 3000;

let orderQty = prompt('Сколько дроидов вы хотите заказать?');
let totalPrice = orderQty * pricePerDroid;

if (orderQty === null) {
  console.log('Отменено пользователем!');
}

else if (isNaN(orderQty) || orderQty <= 0) {
  console.log('Вы указали неверное количество товара!');
}

else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
}

else {
  console.log(`Вы купили ${orderQty} дроидов, на счету осталось, ${credits - totalPrice} кредитов.`);
}