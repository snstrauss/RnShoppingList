import {random, commerce} from 'faker';

function generateItems(count) {
  return Array(count)
    .fill(0)
    .map((_, idx) => {
      return {
        id: random.uuid(),
        name: commerce.productName(),
        description: commerce.productDescription(),
        price: commerce.price(),
        color: commerce.color(),
      };
    });
}

export function getItems(count) {
  return Promise.resolve(generateItems(count));
}
