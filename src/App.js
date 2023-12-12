import styles from "styles/App.module.scss";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import clsx from "clsx";

// PAGES
import Home from "pages/Home";
import Detail from "pages/Detail";
import Category from "pages/Category";

// COMPONENTS
import Header from "components/Header";
import BasketSidebar from "components/BasketSidebar";
import Footer from "components/Footer";
import MobileBottomNav from "components/MobileBottomNav";

// HOOKS
import useMobileDetect from "hooks/useMobileDetect";

// CONTEXT
import BasketContextProvider from "context/BasketContext";
import StarRating from "components/StarRating";
import { useState } from "react";

import AdsComponent from "components/AdsComponent";

const App = () => {
  const device = useMobileDetect();
  const [searchTxt, setSearchTxt] = useState("")

  return (
    <Router>
      <BasketContextProvider>
        <div className={clsx(device.type === "mobile" && styles.paddingForMobile, styles.container)}>
          <Header searchTxt={searchTxt} setSearchTxt={setSearchTxt} />

          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/product/:slug" element={< Detail />} />

              <Route path="/category/:slug" element={< Category />} />

            </Routes>
          </main>
          <Footer />
        </div>
        <BasketSidebar />
        {device.type === "mobile" && <MobileBottomNav />}
        {/* <AdsComponent /> */}
      </BasketContextProvider>
    </Router>

  );
};

export default App;
