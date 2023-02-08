import React from "react";
import styles from "./formPages.module.css";

export default function FormPages() {
  return (
    <div>
      <form className={styles.form}>
        <div className={styles.formImgContainer}>
          <img
            className={styles.formImg}
            src="https://pharmamex.com/images/default.png"
            alt="movie"
          />
        </div>
        <section className={styles.textInputsContainer}>
          <input
            className={styles.nameInput}
            type="text"
            name="title"
            placeholder="movie name"
          />
          <textarea
            className={styles.urlInput}
            type="textarea"
            name="img"
            placeholder="introduce url"
          />
          <button className={styles.submitButton} type="submit">
            Crear
          </button>
        </section>
      </form>
    </div>
  );
}
