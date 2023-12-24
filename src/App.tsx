import "./global.css";
import styles from "./App.module.css";

import { PlusCircle } from "phosphor-react";

import { Header } from "./Components/Header";
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
import { ListHeader } from "./Components/TaskList/ListHeader";

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />

          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader />
        </div>
      </section>
    </main>
  );
}
