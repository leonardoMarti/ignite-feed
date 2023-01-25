import { Logo } from "../../assets/logo";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <strong>Ignite Feed</strong>
    </header>
  );
}
