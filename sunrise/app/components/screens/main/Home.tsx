import "bootstrap/dist/css/bootstrap.min.css";
import { FC } from "react";

import List from "../list/List";

import styles from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className="fs-1">Sunrise</h1>
      <List />
    </div>
  );
};

export default Home;
