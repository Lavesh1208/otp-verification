import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { optReducer } from "./reducers/otpReducer";

export const store = configureStore({
	reducer: {
		otpState: optReducer,
	},
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
