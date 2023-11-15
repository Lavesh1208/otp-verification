import { createSlice } from "@reduxjs/toolkit";

interface optState {
	otpState: "generateOtp" | "verifyOtp";
}

const userInitialState: optState = { otpState: "generateOtp" };

const otpSlice = createSlice({
	name: "otp",
	initialState: userInitialState,
	reducers: {
		setOtpState: (state, action) => {
			state.otpState = action.payload;
		},
	},
});

const optActions = otpSlice.actions;
const optReducer = otpSlice.reducer;

export { optActions, optReducer };
