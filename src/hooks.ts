export const useStorage = () => {
	const setItem = (name: string, data: string) =>
		localStorage.setItem(name, JSON.stringify(data));

	const getItem = (name: string) => {
		const storedData = localStorage.getItem(name);

		return storedData !== null ? JSON.parse(storedData) : null;
	};
    
	return [getItem, setItem];
};
