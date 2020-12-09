const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let quantityOfDroids = prompt('Сколько дроидов вы хотите купить?');
quantityOfDroids === null ? console.log('Отменено пользователем') : totalPrice = quantityOfDroids * pricePerDroid;
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (totalPrice <= credits) {
  console.log(`Вы купили ${quantityOfDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}



