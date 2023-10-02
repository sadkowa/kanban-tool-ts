export const useStorage = () => {
    const setItem = (name, data) => localStorage.setItem(name, JSON.stringify(data))
    const getItem = (name) => JSON.parse(localStorage.getItem(name))

    return [getItem, setItem]
}
