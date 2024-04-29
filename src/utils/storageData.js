// store data in localstorage

export const storageData = (data, dataName) => {
  const localData = JSON.stringify(data);
  localStorage.setItem(dataName, localData);
};
