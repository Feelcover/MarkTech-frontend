import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <NavBar/>
      <main>
      <Banner/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
