import styles from "styles/Card.module.scss";
import { Link, redirect } from "react-router-dom";
import slugify from "slugify";

import AddToBasketBtn from "components/AddToBasketBtn";
import { useState } from "react";

const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <Link
        to={`/product/${slugify(product.title, {
          lower: true,
          strict: true,
        })}-${product.id}`}
        //code style o day
        className={styles.content}
      >
        <div className={styles.img}>
          <img src={product.image} alt="" />
        </div>

        <div className={styles.info}>
          <div className={styles.title}>
            <h3>{product.title}</h3>
          </div>
          <div className={styles.footer}>
            <div className={styles.price}>
              {product.price.toFixed(2)} <small>TRY</small>
            </div>
            <div className={styles.btn}>
              <AddToBasketBtn data={product} />

              <span>{product.quantity}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
