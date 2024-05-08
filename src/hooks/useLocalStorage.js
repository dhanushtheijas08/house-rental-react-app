import { useState, useEffect } from "react";

export const useLocalStorage = (storageKey, initialValue) => {
  const [storageVal, setStorageVal] = useState(getFromLocalStorage(storageKey));

  useEffect(() => {
    setToLocalStorage(storageKey, storageVal);
  }, [storageVal]);

  return [storageVal, setStorageVal];
};

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

const setToLocalStorage = (key, value) => {
  if (typeof value === "object" && value) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};
