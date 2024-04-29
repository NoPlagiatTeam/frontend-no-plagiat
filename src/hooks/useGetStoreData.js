// get localstorage data

export const useGetStoreData = (item) => {
  const result = localStorage.getItem(item);
  const data = JSON.parse(result);
  return data;
};
