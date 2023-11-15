import { useSelector } from "react-redux";
import OtpGeneration from "./components/OtpGeneration";
import { RootState } from "./store/store";
import { Toaster } from "react-hot-toast";
import VerifyOtp from "./components/VerifyOtp";

function App() {
	const { otpState } = useSelector((state: RootState) => state.otpState);
	console.log(otpState);
	return (
		<>
			{otpState && otpState === "generateOtp" ? (
				<OtpGeneration />
			) : (
				<VerifyOtp />
			)}
			<Toaster />
		</>
	);
}

export default App;
