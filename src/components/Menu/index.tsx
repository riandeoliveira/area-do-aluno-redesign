import MenuItem from "components/MenuItem";
import menu_items from "content/menu-items";
import { MenuContext } from "contexts/MenuContext";
import { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import styles from "./styles.module.scss";

const Menu = (): JSX.Element => {
  const { menuIsOpen, handleMenuState } = useContext(MenuContext);

  return (
    <Offcanvas
      show={menuIsOpen}
      onHide={handleMenuState}
      className={styles.menu}
    >
      <aside className={styles.aside}>
        <div className={styles.left_bar}></div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {menu_items.map((item) => (
              <MenuItem title={item.title} icon={item.icon} path={item.path} />
            ))}
          </ul>
        </nav>
      </aside>
    </Offcanvas>
  );
};

export default Menu;
