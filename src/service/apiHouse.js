import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase-config";

const houseListRef = collection(db, "house");

export const fetchHouseList = async () => {
  const houseListSnapshot = await getDocs(houseListRef);
  const houseListData = houseListSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return houseListData;
};

export const fetchHouseById = async (id) => {
  const houseSnapshot = await getDocs(houseListRef);
  const houseData = houseSnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .find((house) => house.id === id);
  return houseData;
};

export const createNewHouse = async (houseData, houseImages) => {
  const newHouseData = {
    ...houseData,
    features: [houseData.feature1, houseData.feature2, houseData.feature2],
    houseImages,
  };
  console.log(newHouseData);
  const newHouseRef = await addDoc(houseListRef, newHouseData);
  return newHouseRef;
};

export const deleteHouse = async (id) => {
  const houseRef = doc(db, "house", id);
  await deleteDoc(houseRef);
};
