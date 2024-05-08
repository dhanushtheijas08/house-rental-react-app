import { useState, useEffect } from "react";

export const useLocalStorage = (storageKey, initialValue) => {
  const [storageVal, setStorageVal] = useState(getFromLocalStorage(storageKey));

  useEffect(() => {
    setToLocalStorage(storageKey, storageVal);
  }, [storageVal]);

  const appendToStorage = (value) => {
    setStorageVal((prevValue) => {
      const newValue = Array.isArray(prevValue)
        ? [...prevValue, value]
        : [prevValue, value];
      return newValue;
    });
  };

  const removeFromStorage = () => {
    localStorage.removeItem(storageKey);
    setStorageVal(initialValue);
  };

  return [storageVal, setStorageVal, appendToStorage, removeFromStorage];
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
  let existingValue = getFromLocalStorage(key);
  if (existingValue !== null && typeof existingValue === "object") {
    if (Array.isArray(existingValue)) {
      existingValue = [...existingValue, ...value];
    } else {
      existingValue = { ...existingValue, ...value };
    }
  } else {
    existingValue = value;
  }
  localStorage.setItem(key, JSON.stringify(existingValue));
};
