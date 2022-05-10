export const bookMarkOn = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const bookMarkOff = (items) => {
  return {
    type: "DELETE_ITEM",
    payload: items,
  };
};
