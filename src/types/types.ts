export type FormFieldType = {
	id: number;
	name: string;
	type: string;
	label: string;
	required?: boolean;
};

export type InitFormDataType = {
	name: string;
	user: string;
	priority: string;
	info: string;
};

export type ReducerAction = {
    type: string,
    
}