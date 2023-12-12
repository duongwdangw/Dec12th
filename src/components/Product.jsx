import styles from "styles/Quantity.module.scss";

import { BasketContext } from "context/BasketContext";
import { useContext, useRef, useEffect } from "react";

const Product = ({ data }) => {
  const inp = useRef("inp");
  const { setCurrentQuantity } = useContext(BasketContext);

  useEffect(() => {
    inp.current.value = data.quantity || 0;
    setCurrentQuantity(0);
  }, [data.quantity]);

 
  

  return (
    <div className={styles.quantity}>
      <input type="number" min="1" max="10" defaultValue={1} ref={inp} />
      
    </div>
  );
};

export default Product;
