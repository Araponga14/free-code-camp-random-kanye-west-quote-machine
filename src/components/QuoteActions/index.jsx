import styles from "./QuoteActions.module.css";




function QuoteActions({onNewQuote}) {
  return (
    <div className={styles.buttons}>
      <a id="tweet-quote" className={styles.tweetQuote} href="twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">
        <img className={styles.twitterSvg} src="/src/assets/twitter.svg" alt="Twitter Icon" />
      </a>
      <button id="new-quote" onClick={onNewQuote} className={styles.newQuote}>New Quote</button>
    </div>
  );
}

export default QuoteActions;