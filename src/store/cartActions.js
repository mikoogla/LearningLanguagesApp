import { startLoading, stopLoading } from "./index.js";
import { replaceCart } from "./index.js";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    const fetchData = async () => {
      const response = await fetch(
        "https://mini-shop-764d4-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Error fetching cart data");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        replaceCart({
          products: cartData.products || [],
          size: cartData.size || 0,
          total: cartData.total || 0,
          hide: cartData.hide || false,
        })
      );
    } catch (error) {
      console.log("Error in fetch function" + error);
    }

    dispatch(stopLoading());
  };
};
export const sendCartData = (cartData) => {
  return (dispatch) => {
    dispatch(startLoading());
    return fetch(
      "https://mini-shop-764d4-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cartData),
      }
    )
      .then((response) => {
        dispatch(stopLoading());
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log("sync error: " + err);
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  };
};
