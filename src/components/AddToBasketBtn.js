import styles from "styles/AddToBasketBtn.module.scss";
import { BasketContext } from "context/BasketContext";
import { useContext, useState } from "react";
import GetIcon from "components/GetIcon";
import BuyComponent from "./BuyComponent";

const AddToBasketBtn = ({ data: product }) => {
  const { basketItems, setBasketItems, setBasketTotal, currentQuantity } =
    useContext(BasketContext);
  const [style, setStyle] = useState();

  const addToBasket = (product) => {
    let arr = [...basketItems];
    let filtered = basketItems.filter((item) => item.id === product.id);
    if (filtered.length > 0) {
      filtered[0].quantity += 1;
      arr[arr.indexOf(filtered[0])] = filtered[0];
      setBasketItems(arr);
    } else {
      setBasketItems((oldState) => [
        ...oldState,
        {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: currentQuantity,
        },
      ]);
    }

    setBasketTotal(
      (oldTotal) => (oldTotal += product.price * (currentQuantity || 1))
    );
  };

  function handleStyle() {
    setStyle('orange')
  }

  return (
    <div>
      <button
        className={styles.addToBasket}
        style={{ background: style }}
        onClick={(e) => {
          e.preventDefault();
          addToBasket(product);
          handleStyle();
        }}
      >
        <GetIcon icon="BsFillCartPlusFill" size={18} /> add to basket
        <BuyComponent value={product} />
      </button>
    </div>
  );
};

export default AddToBasketBtn;
