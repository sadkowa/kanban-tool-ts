import React, {
	useReducer,
	useState,
	useContext,
	ChangeEvent,
	FocusEvent,
	FormEvent,
} from "react";
// @ts-ignore
import { v4 as uuid } from 'uuid';
import {
	fields,
	initFormData,
	fieldValidate,
	formValidate,
	priorityOptions,
} from "../providers/formData";
import TasksContext from "../context/TasksContext";

import { FormFieldType, InitFormDataType } from "../types/types";

function TaskForm() {
	const [errorsList, setErrorsList] = useState<Record<string, string>>({});
	const { addTask, formIsActive, setFormIsActive } = useContext(TasksContext);

	type ActionType = {
		type: string;
		name?: string;
		value?: string;
	};

	const reducer = (state: InitFormDataType, action: ActionType) => {
		if (action.type === "reset") {
			return initFormData;
		} else if (action.type === "change") {
			return { ...state, [action.name as string]: action.value };
		}
		return state;
	};

	const [state, dispatch] = useReducer(reducer, initFormData);

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorsList({});

		const formErrors = formValidate(state);

		setErrorsList(formErrors);

		if (Object.keys(formErrors).length === 0) {
			dispatch({ type: "reset" });
			addTask({ ...state, id: uuid() });
			setFormIsActive(false);
		}
	};

	const renderOptions = () => {
		return priorityOptions.map((item, index) => (
			<option key={index} value={item}>
				{item}
			</option>
		));
	};

	const changeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
		item: FormFieldType
	) => {
		setErrorsList({
			...errorsList,
			[item.name]: "",
		});

		dispatch({ type: "change", name: item.name, value: e.target.value });
	};

	const blurHandler = (
		e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
		item: FormFieldType
	) => {
		const newError = fieldValidate(item, e.target.value);

		if (newError) {
			setErrorsList({
				...errorsList,
				[item.name]: newError,
			});
		}
	};

	const closeHandler = () => {
		setErrorsList({});
		setFormIsActive(false);
	};

	const renderFields = () =>
		fields.map((item) => {
			const { name, type, id, label } = item;

			if (type === "select") {
				return (
					<label key={id} className="form__label">
						Task priority
						<select
							className="form__input"
							name={name}
							value={state[name as keyof InitFormDataType]}
							onChange={(e) => changeHandler(e, item)}
						>
							{renderOptions()}
						</select>
					</label>
				);
			} else if (type === "textarea") {
				return (
					<label key={id} className="form__label">
						Task description
						<textarea
							className={
								errorsList[name]
									? "form__input form__input--textarea form__input--error"
									: "form__input form__input--textarea"
							}
							name={name}
							value={state[name as keyof InitFormDataType]}
							onChange={(e) => changeHandler(e, item)}
							onBlur={(e) => blurHandler(e, item)}
						/>
						<p className="form__errors">{errorsList[name]}</p>
					</label>
				);
			} else {
				return (
					<label key={id} className="form__label" htmlFor={name}>
						{label}
						<input
							id={name}
							className={
								errorsList[name]
									? "form__input form__input--error"
									: "form__input"
							}
							type={type}
							name={name}
							value={state[name as keyof InitFormDataType]}
							onChange={(e) => changeHandler(e, item)}
							onBlur={(e) => blurHandler(e, item)}
						/>
						<p className="form__errors">{errorsList[name]}</p>
					</label>
				);
			}
		});

	return (
		<section
			className={formIsActive ? "form__box form__box--active" : "form__box"}
		>
			<form className="form" onSubmit={submitHandler}>
				{renderFields()}
				<input
					className="form__input form__input--button"
					id="submit"
					type="submit"
					name="submit"
					value="Add new task"
				/>
			</form>
			<button onClick={closeHandler} className="form__button task--button ">
				&#x00d7;
			</button>
		</section>
	);
}

export default TaskForm;
