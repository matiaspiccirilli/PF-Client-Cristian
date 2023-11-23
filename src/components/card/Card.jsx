import { useEffect, useState } from "react";
import styles from "./card.module.css";
import DetailProduct from "../detailProduct/DetailProduct";
const Card = ({
  productId, categoryId, nameProd, brand, description, price,
  discountPercentage, image, active, tags, stock,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  let detail = {
    productId: productId,
    categoryId: categoryId,
    nameProd: nameProd,
    description: description,
    price: price,
    image: image,
    stock: stock,
  };

  // Cambia el estado showDetail para que se reenderice el DetailProduct siempre que se le haga click a la card
  const handleClick = (e) => {
    e.stopPropagation();
    setShowDetail(true); 
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={image} alt="" />
      <h2>{nameProd}</h2>
      <h2>{description}</h2>
      <h2>{price}</h2>
      <button>Buy</button>
      
      {showDetail && (
        <div>
          <DetailProduct detail={detail} onClose={() => setShowDetail(false)} />
        </div>
      )}
    </div>
  );
};
export default Card;