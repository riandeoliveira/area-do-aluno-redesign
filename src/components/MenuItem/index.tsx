import type { IMenuItem } from "interfaces";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface MenuItemProps extends IMenuItem {}

const MenuItem = ({ path, icon, title }: MenuItemProps): JSX.Element => {
  const router = useRouter();

  return (
    <li className={styles.item}>
      <Link href={router.pathname + path}>
        <a className={styles.link}>
          <div className={styles.icon}>{icon}</div>
          <span className={styles.title}>{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
