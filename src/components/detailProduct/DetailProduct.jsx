import { useState } from "react";
import styles from "./detailProduct.module.css";

const DetailProduct = ({ detail, onClose }) => {
  
  //Close DetailProduct
  const handleClosetDetailPopup = () => {
    onClose();
  };

  const handleBuyProduct = () => {
    // Funciones para redirigir al shoppingCar
  };

  return (
    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
      <div className={styles["poput-content"]}>
        <h1>{detail.nameProd}</h1>
        <img src={detail.image} alt="" />
        <h2>{detail.description}</h2>
        <button onClick={handleBuyProduct}>Buy</button>
        <h2>Price: {detail.price}</h2>
        <h2>Stock: {detail.stock}</h2>
        <button onClick={handleClosetDetailPopup}>Close</button>
      </div>
    </div>
  );
};

export default DetailProduct;
