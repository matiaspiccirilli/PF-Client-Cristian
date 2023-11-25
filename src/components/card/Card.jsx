import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({
  productId,
  categoryId,
  nameProd,
  priceOnSale,
  brand,
  description,
  price,
  discountPercentage,
  image,
  active,
  tags,
  stock,
}) => {
  return (
    <div className={styles.card}>
      <img src={image[0]} alt="" />
      <h2>{nameProd}</h2>
      <h2>{description}</h2>
      <h2>{price}</h2>
      <button>
        <Link to={`/updateProduct/${productId}`}>Update</Link>
      </button>
    </div>
  );
};
export default Card;
