import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";
import menuData from "./menuData";

const Menu = (props) => {
  return (
    <div className={styles.menu}>
      {menuData.map((item) => {
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            onAddCartItem={props.onAddCartItem}
          />
        );
      })}
    </div>
  );
};

export default Menu;
