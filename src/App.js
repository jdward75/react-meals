import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h1 className={styles["app-title"]}>React Meals</h1>
        <div className={styles["cart-preview"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Your Cart
          <div>2</div>
        </div>
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
          <div className={styles.menu}>Menu</div>
        </div>
      </main>
    </div>
  );
}

export default App;
