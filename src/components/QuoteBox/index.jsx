import styles from "./QuoteBox.module.css";

function QuoteBox({ children }) {
  return <div id="quote-box" className={styles.quoteBox}>{children}</div>;
}

export default QuoteBox;
