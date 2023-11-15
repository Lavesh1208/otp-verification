import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { optActions } from "../store/reducers/otpReducer";
import toast from "react-hot-toast";

const OtpGeneration = () => {
	const { register, handleSubmit } = useForm();

	const dispatch = useDispatch();

	const onSubmit = async (data: FieldValues) => {
		try {
			await axios.post(
				"https://otp-service-beta.vercel.app/api/otp/generate",
				data
			);
			dispatch(optActions.setOtpState("verifyOtp"));
			toast.success("Successfully generated OTP");
		} catch (error) {
			console.error("Error during OTP generation:", error);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
			<h2 className="text-2xl font-semibold mb-4">OTP Generation</h2>
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
					OTP Type:
					<select
						{...register("type")}
						className="block w-full p-2 border rounded-md"
					>
						<option value="numeric">Numeric</option>
						<option value="alphanumeric">Alphanumeric</option>
						<option value="alphabet">Alphabet-based</option>
					</select>
				</label>

				<label className="block mb-2">
					Organization:
					<input
						{...register("organization", {
							required: "Organization is required",
						})}
						className="block w-full p-2 border rounded-md"
					/>
				</label>

				<label className="block mb-2">
					Subject:
					<input
						{...register("subject", { required: "Subject is required" })}
						className="block w-full p-2 border rounded-md"
					/>
				</label>

				<button
					type="submit"
					className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
				>
					Generate OTP
				</button>
			</form>
		</div>
	);
};

export default OtpGeneration;
