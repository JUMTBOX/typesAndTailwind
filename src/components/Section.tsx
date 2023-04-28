import React from "react";
import styles from "../styles/section.module.scss";

export default function Section({ color }: { color: string }) {
  return (
    <div className={styles.box}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, et
        neque nisi distinctio corrupti provident veritatis, sapiente culpa vel
        reiciendis enim. Maiores, ab eos! Ducimus quaerat quae nisi tenetur
        dolor.
      </p>
      <button className={styles[color]}>버튼</button>
    </div>
  );
}
