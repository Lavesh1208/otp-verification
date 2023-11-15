import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const VerifyOtp = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
		try {
			await axios.post(
				"https://otp-service-beta.vercel.app/api/otp/verify",
				data
			);
			toast.success("Successfully Verified OTP");
		} catch (error) {
			console.log("Error during OTP generation:", error);
			toast.error("Failed to Verify OTP");
		}
	};

	return (
		<div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
			<h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="block mb-2">
					Email:
					<input
						type="email"
						{...register("email", { required: "Email is required" })}
						className="block w-full p-2 border rounded-md"
					/>
				</label>
				<label className="block mb-2">
					Enter OTP:
					<input
						type="text"
						{...register("otp", { required: "Entered OTP is required" })}
						className="block w-full p-2 border rounded-md"
					/>
				</label>

				<button
					type="submit"
					className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700"
				>
					Verify OTP
				</button>
			</form>
		</div>
	);
};

export default VerifyOtp;
