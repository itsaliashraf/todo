export const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const getDataFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  const dataArray = JSON.parse(storedData);
  return dataArray;
};
