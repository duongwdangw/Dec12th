import { useContext } from "react";
import { BasketContext } from "context/BasketContext";

import Product from "./Product";

function BuyComponent({ value }) {
  const { basketItems } = useContext(BasketContext);

  const getItemFromBasket = (data) => {
    let filter =
      basketItems.length > 0 &&
      basketItems.filter((item) => item.id === data.id)[0];
    if (filter) {
      return filter;
    } else {
      return data;
    }
  };
 

  return <Product data={getItemFromBasket(value)} />;
}

export default BuyComponent;
