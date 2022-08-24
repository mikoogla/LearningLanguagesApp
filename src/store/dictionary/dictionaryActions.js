import { startLoading, stopLoading } from "../loaderSlice";
import { replaceDictionary } from "../index.js";

export const fetchDictionary = () => {
  console.log("fetching dictionary");
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await fetch(
      "https://learningapp-8839c-default-rtdb.europe-west1.firebasedatabase.app/dictionary.json"
    );
    const dictionary = (await response.json()) || [];
    dispatch(replaceDictionary(dictionary));
    dispatch(stopLoading());
  };
};

export const sendDictionary = (data) => {
  console.log("sending dictionary");
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const response = await fetch(
      "https://learningapp-8839c-default-rtdb.europe-west1.firebasedatabase.app/dictionary.json",
      {
        method: "PUT",
        body: JSON.stringify(data || []),
      }
    );
    dispatch(stopLoading());
  };
};
