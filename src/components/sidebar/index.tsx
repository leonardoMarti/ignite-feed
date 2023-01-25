import { PencilLine } from "phosphor-react";
import { Avatar } from "../avatar";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1609741199432-c3ff173d436b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRldmVsb3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&h=200&q=40"
      />
      <div className={styles.profile}>
        <Avatar src="https://images.unsplash.com/photo-1604883781269-d121d9ad20f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbmFnZW18ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=60" />
        <strong>Leozera</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
