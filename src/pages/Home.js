import styles from "styles/Home.module.scss";
import Card from "components/Card";
import Title from "components/Title";
import useMakeRequest from "hooks/useMakeRequest";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Menu from "components/MenuComponents";

const Home = (props) => {
  const result = useMakeRequest("https://fakestoreapi.com/products");
  console.log(result);
  const [searchTxt, setSearchTxt] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const [searchInHomeArr, setSearchInHomeArr] = useState([]);

  useEffect(() => {
    console.log("home:", searchInHomeArr);
  }, [searchInHomeArr]
  )

  if (!result.data) {
    if (result.error) {
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Title txt={result.error} size={25} transform="uppercase" />
        </div>
      );
    } else {
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Title txt="Loading..." size={25} transform="uppercase" />
        </div>
      );
    }
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          margin: "20px",
        }}>
        <Menu x={setSearchInHomeArr}></Menu>
        <section className={styles.home}>
          <div className={styles.container}>
            <div className={styles.row}>
              {" "}
              <input
                type="text"
                placeholder="Search"
                value={searchTxt}
                onChange={(e) => {
                  setSearchTxt(e.target.value);
                }}
              />
              <button className={styles.reloadButton} onClick={() => window.location.reload()}>
                Reload
              </button>
            </div>
            <div className={styles.row}>
              {result.data && (
                <div className={styles.title}>
                  <Title
                    txt="all products"
                    color="#171717"
                    size={22}
                    transform="uppercase"
                  />
                </div>
              )}
            </div>
            <div className={styles.row}>
              {result.data ? (
                searchInHomeArr && searchInHomeArr.length ?
                  result.data.filter((item) => searchInHomeArr.includes(item.category)).map((product, key) => <Card product={product} key={key} />)
                  :
                  result.data
                    .filter((item) =>
                      item.title.includes(
                        searchParams.get("search")
                          ? searchParams.get("search")
                          : ""
                      )
                    )
                    .filter((item) => item.title.includes(searchTxt))
                    .map((product, key) => <Card product={product} key={key} />)
              ) : (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Title txt={result.error} size={25} transform="uppercase" />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Home;
