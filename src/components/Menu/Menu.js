import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";
import menuData from "./menuData";

const Menu = () => {
  return (
    <div className={styles.menu}>
      {menuData.map((item) => {
        return (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Menu;
