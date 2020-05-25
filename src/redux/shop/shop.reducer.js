import shopData from '../../pages/ShopPage/ShopData';

const INITIAL_STATE = {
  collections: shopData,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
