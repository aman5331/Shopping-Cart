// productActions.js
import axios from "axios";

export const fetchProducts = () => (dispatch) => {
  axios
    .get("https://dummyjson.com/products")
    .then((response) => {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};
