import { HeadArea, Header, Menu } from "components";
import { MenuProviver } from "contexts/MenuContext";
import type { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <HeadArea />
      <MenuProviver>
        <Header />
        <Menu />
      </MenuProviver>
    </>
  );
};

export default Home;
