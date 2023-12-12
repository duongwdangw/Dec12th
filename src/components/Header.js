import styles from "styles/Header.module.scss";
import { Link } from "react-router-dom";
import GetIcon from "components/GetIcon";
import clsx from "clsx";
import CategoryItem from "./CategoryItem";
import useMakeRequest from "hooks/useMakeRequest";
import { BasketContext } from "context/BasketContext";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import AdsComponent from "./AdsComponent";

const Header = (props) => {
  const result = useMakeRequest("https://fakestoreapi.com/products/categories");
  const { basketItems, setBasketIsOpen } = useContext(BasketContext);
  const [searchTxt, setSearchTxt] = useState("")
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h2>react store</h2>
        </Link>
      </div>
      <AdsComponent />


      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <button onClick={() => {
                navigate("?search=" + searchTxt)
              }}>Search</button>
            </li>
            <li>

              <input type="text" placeholder="Search" value={searchTxt} onChange={(e) => {
                setSearchTxt(e.target.value)
              }} />
            </li>
            <li>
              <Link to="/" onClick={(e) => e.preventDefault()} className={styles.a}>
                Categories
              </Link>
              <ul className={styles.subMenu}>{result.data ? result.data.map((cat, index) => <CategoryItem data={cat} key={index} />) : <div>{result.error}</div>}</ul>
            </li>
            <li>
              <Link
                to="/"
                className={clsx(styles.basketBtn, styles.a)}
                onClick={(e) => {
                  e.preventDefault();
                  setBasketIsOpen((oldState) => !oldState);
                }}
              >
                <GetIcon icon="BsCart4" size={25} color="#ffffff" />
                {basketItems.length > 0 && <span className={styles.basketLength}> {basketItems.length} </span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
