import styles from "./listItem.module.scss";
import { useRouter } from "next/router";

export default function ListItem({ values }) {
  const router = useRouter();
  const handleClick = (item) => {
    if (item === "Dashboard") {
      router.push("/dashboard");
    }
  };
  return (
    <ul className={styles.listStyle}>
      {values?.map((obj, i) => (
        <li
          onClick={() => handleClick(obj)}
          key={i}
          className={styles.listStyle_itemList}
        >
          {obj}
        </li>
      ))}
    </ul>
  );
}
