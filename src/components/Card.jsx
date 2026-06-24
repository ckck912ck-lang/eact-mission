// function ProductCard(props) {
import styles from "./Card.module.css";

function Card({ name, price, brand }) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{brand}</p>
    </article>
  );
}
export default Card;
