import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDictionary,
  sendDictionary,
} from "../store/dictionary/dictionaryActions";
export default function DictionarySync() {
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary);
  const touched = useSelector((state) => state.dictionary.touched);
  useEffect(() => {
    dispatch(fetchDictionary());
  }, [dispatch]);

  useEffect(() => {
    if (touched) {
      dispatch(sendDictionary(dictionary));
    }
  }, [dictionary, dispatch, touched]);

  return;
}
