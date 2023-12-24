import styles from "./Header.module.css";
import logoTodo from "../assets/desafio-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoTodo}  />
    </header>
  );
}
