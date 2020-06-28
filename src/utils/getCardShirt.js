import peachShirt from '../img/card-shirts/peach-shirt.jpg';
import greenShirt from '../img/card-shirts/green-shirt.jpg';
import whiteShirt from '../img/card-shirts/white-shirt.jpg';

export function getCardShirt (shirtName) {
  switch (shirtName) {
    case 'white':
      return whiteShirt;
    case 'peach':
      return peachShirt;
    case 'green':
      return greenShirt;
    default:
      return greenShirt;
  }
}
