import styles from "./QuoteText.module.css";

function QuoteText({ quote, author, textColor }) {
  return (
    <div className={styles.quoteText}>
      <div className={styles.quote}>
        <img className={styles.quoteLeftSvg} src="/src/assets/quote-left.svg" alt="Quote Left" />
        <span id="text" className={styles.text} color={textColor}>{quote}</span>
      </div>
      <span id="author" className={styles.author}>{author}</span>
    </div>
  );
}

export default QuoteText;