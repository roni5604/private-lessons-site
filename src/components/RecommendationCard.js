import styles from "../styles/globalStyles";

const RecommendationCard = ({ recommendation }) => {
  return (
    <div style={styles.card}>
      <h3>{recommendation.name}</h3>
      <p>{recommendation.feedback}</p>
      <p>⭐⭐⭐⭐⭐ ({recommendation.rating}/5)</p>
    </div>
  );
};

export default RecommendationCard;
