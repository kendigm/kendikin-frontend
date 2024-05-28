import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import { apiSlice } from "./apiSlices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedWishlistReducer = persistReducer(persistConfig, wishlistSlice);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export let persistor = persistStore(store);
