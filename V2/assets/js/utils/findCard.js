const findCard = (cards, id) => {
  return cards.filter((card) => card.id === id)[0];
};

export default findCard;
