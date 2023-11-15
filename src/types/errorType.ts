export interface CustomeApiErrorType {
	data: {
		message: string;
		error: string;
		statusCode: number;
	};
	status: number;
}
