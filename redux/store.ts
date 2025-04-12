import { configureStore } from '@reduxjs/toolkit';
import { formApi } from './formApi';
import formReducer from './formSlice';

export const store = configureStore({
	reducer: {
		[formApi.reducerPath]: formApi.reducer,
		form: formReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(formApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
