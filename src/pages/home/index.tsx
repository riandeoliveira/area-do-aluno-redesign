import { HeadArea } from "components";
import type { NextPage } from "next";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <HeadArea />
      <div className={styles.layout}>
        <h1 className={styles.title}>Hello, Rian Oliveira! Have a nice coding ;)</h1>
      </div>
    </>
  );
};

export default Home;
