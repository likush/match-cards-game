import { v1 } from 'uuid';

function createArrayOfCards (imagesData) {
  const filteredImagesData = imagesData.results.map(image => ({imageId: image.id, url: image.urls.small}));
  let cardsArr = [];
  for (let i = 0; i < 2; i++) {
    cardsArr = filteredImagesData.reduce((prevValue, item) => {
      const newItemValue = {...item, cardId: v1(), isMatched: false};
      return [...prevValue, newItemValue];
    }, cardsArr);
  }

  return cardsArr.sort(() => Math.random() - 0.5);
}

export default createArrayOfCards;
