type FormFieldType = {
	id: number;
	name: string;
	type: string;
	label: string;
	required?: boolean;
};

const fields: FormFieldType[] = [
	{
		id: 1,
		name: "name",
		type: "text",
		label: "Task title",
		required: true,
	},
	{
		id: 2,
		name: "user",
		type: "text",
		label: "Worker name",
		required: true,
	},
	{
		id: 3,
		name: "priority",
		type: "select",
		label: "Task priority",
	},
	{
		id: 4,
		name: "info",
		type: "textarea",
		label: "Description",
		required: true,
	},
];

type InitFormDataType = {
	name: string;
	user: string;
	priority: string;
	info: string;
};

const initFormData: InitFormDataType = {
	name: "",
	user: "",
	priority: "no priority",
	info: "",
};

const priorityOptions = ["no priority", "low", "medium", "high"];

const fieldValidate = (field: FormFieldType, value: string): string | undefined => {
	let error;

	if (field.required) {
		if (value.length === 0) {
			error = "This field is required.";
		}
	}
	return error;
};

const formValidate = (state: InitFormDataType) => {

	type Errors = {
		[name: string]: string;
	};

	const errors: Errors = {};

	fields.forEach((field) => {
		const newError = fieldValidate(
			field,
			state[field.name as keyof InitFormDataType]
		);
		if (newError) {
			errors[field.name] = newError;
		}
	});

	return errors;
};

export { fields, initFormData, fieldValidate, formValidate, priorityOptions };
