import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "../store/cartActions.js";
let firstStart = 2;

export default function CartSync() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (firstStart > 0) {
      firstStart -= 1;
      return;
    }
    if (cart.touched) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return;
}
