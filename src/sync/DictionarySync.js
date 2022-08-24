import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDictionary,
  sendDictionary,
} from "../store/dictionary/dictionaryActions";
export default function DictionarySync() {
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary);
  let prevent = 2;
  useEffect(() => {
    dispatch(fetchDictionary());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendDictionary(dictionary));
  }, [dictionary, dispatch, prevent]);

  return;
}
