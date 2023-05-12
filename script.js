// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
// кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

const shoppingList = [
  { name: "milk", quantity: 3, isPurchased: false, price: 40 },

  { name: "banana", quantity: 2, isPurchased: true, price: 50 },

  { name: "apples", quantity: 3, isPurchased: false, price: 40 },

  { name: "tea", quantity: 1, isPurchased: true, price: 70 },

  { name: "eggs", quantity: 5, isPurchased: false, price: 50 },
];

shoppingList.forEach((item) => {
  item.totalPrice = item.quantity * item.price;
});

console.log(shoppingList);

// - Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

const sortShoppingList = shoppingList.sort(
  (prev, cur) => prev.isPurchased - cur.isPurchased
);

console.log(sortShoppingList);

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const addProduct = () => {
  const checkingProduct = prompt("Check product ..................");

  const indexProduct = shoppingList.findIndex(
    (product) =>
      product.name.toLocaleLowerCase() === checkingProduct.toLocaleLowerCase()
  );

  if (indexProduct !== -1) {
    shoppingList[indexProduct].isPurchased = true;
    return shoppingList[indexProduct];
  } else {
    alert(`Sorry we didn't find ${checkingProduct}.`);
  }
};

addProduct();

// - Видалення продукту зі списку (видалення повинно проводитися шляхом
// створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

const deleteProduct = () => {
  const checkingProduct = prompt("Check product ..................");

  const res = shoppingList.filter((product) => {
    return product.name !== checkingProduct.toLowerCase();
  });

  if (shoppingList.length === res.length) {
    alert(`Sorry we didn't find ${checkingProduct}.`);
    return;
  }

  return res;
};

console.log("deleteProduct", deleteProduct());

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function addedSomeProduct(nameProduct, quantity, purchased, price) {
  {
    const indexProduct = shoppingList.findIndex(
      (product) =>
        product.name.toLocaleLowerCase() === nameProduct.toLocaleLowerCase()
    );

    if (indexProduct !== -1) {
      shoppingList[indexProduct] = {
        ...shoppingList[indexProduct],
        quantity: shoppingList[indexProduct].quantity + quantity,
        totalPrice:
          (shoppingList[indexProduct].quantity + quantity) *
          shoppingList[indexProduct].price,
      };
    } else {
      shoppingList.push({
        name: nameProduct,
        quantity: quantity,
        isPurchased: purchased,
        price: price,
        totalPrice: quantity * price,
      });
    }
  }

  console.log(shoppingList);
}

addedSomeProduct("banana", 2, true, 30);

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

const totalSum = shoppingList
  .map((item) => item.totalPrice)
  .reduce((prev, current) => prev + current);

console.log(totalSum);

// Підрахунок суми всіх (не) придбаних продуктів.

const totalFalseSum = shoppingList
  .filter((item) => !item.isPurchased)
  .reduce((count, item) => count + item.totalPrice, 0);

console.log(totalFalseSum);

// Показання продуктів в залежності від суми,
// (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

const sortTotalPriceShoppingList = shoppingList.sort(
  (prev, cur) => prev.totalPrice - cur.totalPrice
);

console.log(sortTotalPriceShoppingList);
