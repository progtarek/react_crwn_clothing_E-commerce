import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const combinedReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, combinedReducers);
