import reactDOM from "react-dom";
import styles from "./App.module.css";
import Menu from "./components/Menu/Menu";
import CartPreview from "./components/Cart/CartPreview";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h1 className={styles["app-title"]}>React Meals</h1>
        <CartPreview />
      </header>
      <main className={styles.main}>
        <div className={styles["description"]}>
          <h1>Delicious Food, Delivered To You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just in time
            and of course by experienced chefs.
          </p>
        </div>
        <div className={styles["menu-container"]}>
          <Menu />
        </div>
      </main>
      {reactDOM.createPortal(<Cart />, document.getElementById("root-overlay"))}
    </div>
  );
}

export default App;
