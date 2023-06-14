import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer, PERSIST} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import api from '../features/products/productsAPI';
import cartReducers from '../features/cart/cartReducer';
import {useSelector, TypedUseSelectorHook} from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart'],
  blacklist: [api.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, cartReducers);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(api.middleware),
});

const persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, persistor};
