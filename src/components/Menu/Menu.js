import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <MenuItem />
    </div>
  );
};

export default Menu;
