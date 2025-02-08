import { useState, useEffect } from "react";
import QuoteBox from "./components/QuoteBox";
import QuoteText from "./components/QuoteText";
import QuoteActions from "./components/QuoteActions";
import styles from "./App.module.css";

const colors = [
  "#667eea", "#764ba2", "#ff6b6b", "#48bb78", "#f6e05e", "#f9f871", "#ff6347", "#4682b4", "#9acd32", "#ff4500",
  "#2e8b57", "#daa520", "#ff1493", "#00ced1", "#9400d3", "#ff00ff", "#8a2be2", "#5f9ea0", "#7fff00", "#d2691e",
  "#ff7f50", "#6495ed", "#dc143c", "#00fa9a", "#ff69b4", "#cd5c5c"
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function App() {
  const [quote, setQuote] = useState("");
  const [bgColor, setBgColor] = useState(getRandomColor());

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.kanye.rest/");
      const data = await response.json();
      setQuote(data.quote);
      setBgColor(getRandomColor());
    } catch (error) {
      console.error("Erro ao buscar frase:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={styles.app} style={{ backgroundColor: bgColor }}>
      <QuoteBox>
        <QuoteText quote={quote} author="Kanye West" textColor={bgColor} />
        <QuoteActions onNewQuote={fetchQuote} />
      </QuoteBox>
    </div>
  );
}

export default App;
