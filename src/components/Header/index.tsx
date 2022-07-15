import { MenuContext } from "contexts/MenuContext";
import Image from "next/image";
import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import styles from "./styles.module.scss";

const Header = (): JSX.Element => {
  const { toggleMenuShow, menuIsOpen } = useContext(MenuContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/assets/icons/cesuca-logo.svg"
          alt="Estrela opaca com contorno amarelo do lado esquerdo do título: Universidade Cruzeiro do Sul"
          width={186}
          height={50}
        />
        <button
          type="button"
          title="Abrir menu de navegação"
          className={styles.menu_button}
          onClick={toggleMenuShow}
        >
          {menuIsOpen ? (
            <CgClose size={40} className={styles.icon} />
          ) : (
            <HiMenu size={40} className={styles.icon} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
