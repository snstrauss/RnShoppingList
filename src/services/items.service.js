import {random, commerce} from 'faker';

export function generateItems(count, title) {
  const items = Array(count)
    .fill(0)
    .map(() => {
      return {
        id: random.uuid(),
        name: title || commerce.productName(),
        description: commerce.productDescription(),
        price: commerce.price(),
        color: commerce.color(),
      };
    });

  return items;
}

export function removeItem(items, item) {
  return items.filter((listItem) => listItem.id !== item.id);
}

export function getItems(count) {
  return Promise.resolve(generateItems(count));
}
