const getTotalItemsCount = (items) => items
  .reduce((prev, curr) => prev += curr.amount, 0);


const getTotalItemsPrice = (items) => items
  .reduce((prev, curr) => prev += curr.price * curr.amount, 0);

const formatOrder = (order) => {
  const {
    contacts,
    coords,
    items,
  } = order;

  return `----------------------------
        АДРЕСАТ
Имя: ${contacts.name}
Email: ${contacts.email}
Телефон: ${contacts.phone}
Упаковка: ${contacts.packageType}
Комментарий:${contacts.comment}
Адрес: ${contacts.address}
----------------------------
        КООРДИНАТЫ
Широта: ${coords.lat}
Долгота: ${coords.lng}
----------------------------
        КОРЗИНА
${items
  .map(item => `${item.id} ${item.name} x${item.amount}`)
  .join(`\n`)
}
----------------------------`;
};

export {
  formatOrder,
  getTotalItemsCount,
  getTotalItemsPrice,
};
