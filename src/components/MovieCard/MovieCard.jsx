import React from "react";
import styles from "./movieCard.module.css";
import { TiDeleteOutline } from "react-icons/ti";
import { CgEditMarkup } from "react-icons/cg";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MovieCard({ item }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.movieImgContainer}>
        <Link to={`/movies/${item.id}`}>
          <img src={item.img} className={styles.cardImage} />
        </Link>
      </div>
      {/* <p className={styles.cardTitle}>{item.name}</p>
        <p>{item.id}</p> */}
      <TiDeleteOutline className={styles.deleteIcon} />
      <CgEditMarkup className={styles.editIcon} />
      <BsFillHeartFill className={styles.favoriteIcon} />
    </div>
  );
}
