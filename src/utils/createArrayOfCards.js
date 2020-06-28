import { v1 as uuidv1 } from 'uuid';

function createArrayOfCards (imagesData) {
  const filteredImagesData = imagesData.results.map(image => ({imageId: image.id, url: image.urls.small}));
  let cardsArr = [];
  for (let i = 0; i < 2; i++) {
    cardsArr = filteredImagesData.reduce((prevValue, item) => {
      const cardId = uuidv1();
      const newItemValue = {...item, cardId};
      return [...prevValue, newItemValue];
    }, cardsArr);
  }

  return cardsArr.sort(() => Math.random() - 0.5);
}

export default createArrayOfCards;
