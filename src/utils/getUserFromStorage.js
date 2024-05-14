export const getUserDataFromStorage = (dataName) => {
    const userDataJSON = localStorage.getItem(dataName);
    if (userDataJSON) {
        return JSON.parse(userDataJSON);
    }
    return null;
}