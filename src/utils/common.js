const getTotalItemsCount = (items) => items
  .reduce((prev, curr) => prev += curr.amount, 0);


const getTotalItemsPrice = (items) => items
  .reduce((prev, curr) => prev += curr.price * curr.amount, 0);


export {
  getTotalItemsCount,
  getTotalItemsPrice,
};
