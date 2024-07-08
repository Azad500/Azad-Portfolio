import { useState } from "react";
import styles from "./evaluate.module.scss";

interface EvaluateProps {
  handleCloseEvaluate: () => void;
}
export default function Evaluate({ handleCloseEvaluate }: EvaluateProps) {
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [selectedStar, setSelectedStar] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const handleClick = (index: number) => {
    setSelectedStar(index);
  };
  return (
    <section className={styles.evaluateContainer}>
      <h2>Evaluate</h2>
      <div className={styles.starElement}>
        {[1, 2, 3, 4, 5].map((star) => (
          <p
            key={star}
            className={
              hoveredStar >= star || selectedStar >= star ? styles.hovered : ""
            }
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(star)}
          >
            ★
          </p>
        ))}
      </div>
      <form className={styles.commentContainer}>
        <textarea name="comment" id="comment" placeholder="Comment"></textarea>
      </form>
      <div className={styles.buttons}>
        <button onClick={handleCloseEvaluate}>Back</button>
        <button>Send</button>
      </div>
    </section>
  );
}
