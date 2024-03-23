import { useCallback } from "react";
import { TaskType } from "./types/types";

type setItemType = (name: string, data: TaskType[]) => void;
type getItemType = (name: string) => TaskType[] | null;

export const useStorage = (): [getItemType, setItemType] => {
	const setItem: setItemType = useCallback(
		(name, data) => localStorage.setItem(name, JSON.stringify(data)),
		[]
	);

	const getItem: getItemType = useCallback((name) => {
		const storedData = localStorage.getItem(name);

		return storedData !== null ? JSON.parse(storedData) : null;
	}, []);

	return [getItem, setItem];
};
