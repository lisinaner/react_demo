import { Link, Outlet } from "umi";
import styles from "./index.less";
import { initializeParse, useParseQuery } from "@parse/react";
console.log(123);

initializeParse("http://localhost:1337/parse", "lsn", "");
export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
