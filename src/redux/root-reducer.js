import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const combinedReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, combinedReducers);
