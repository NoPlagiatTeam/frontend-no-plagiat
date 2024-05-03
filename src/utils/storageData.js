// store data in localstorage

export const storageData = (data, dataName) => {
  const localData = JSON.stringify(data);
  localStorage.setItem(dataName, localData);
};

export const getUserDataFromStorage = (dataName) => {
  const userDataJSON = localStorage.getItem(dataName);
  if (userDataJSON) {
    return JSON.parse(userDataJSON);
  }
  return null;
}
