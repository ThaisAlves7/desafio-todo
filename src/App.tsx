import "./global.css";
import styles from "./App.module.css";

import { Header } from "./Components/Header";
import { Input } from "./Components/Input";

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />

          
        </div>
      </section>
    </main>
  );
}
