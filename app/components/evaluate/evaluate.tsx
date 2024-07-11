import { useState } from "react";
import styles from "./evaluate.module.scss";

interface EvaluateProps {
  handleCloseEvaluate: () => void;
}

export default function Evaluate({ handleCloseEvaluate }: EvaluateProps) {
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [selectedStar, setSelectedStar] = useState<number>(0);
  const [fullName, setFullName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleMouseEnter = (index: number) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  const handleClick = (index: number) => {
    setSelectedStar(index);
  };

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fullName || !comment || selectedStar === 0) {
      alert("Full Name, Comment, and Star rating are required");
      return;
    }
    console.log({ fullName, comment, selectedStar });
  };

  return (
    <section className={styles.evaluateContainer}>
      <h2>Rate me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="FullName"
          required
          value={fullName}
          onChange={handleFullNameChange}
        />
        <div className={styles.starElement}>
          {[1, 2, 3, 4, 5].map((star) => (
            <p
              key={star}
              className={
                hoveredStar >= star || selectedStar >= star
                  ? styles.hovered
                  : ""
              }
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(star)}
            >
              ★
            </p>
          ))}
        </div>
        <p className={styles.thoughts}>
          I would be very happy if you would share your thoughts with me after
          reviewing my portfolio. Thank you from now!
        </p>
        <div className={styles.commentContainer}>
          <textarea
            name="comment"
            id="comment"
            placeholder="Comment"
            required
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={handleCloseEvaluate}>
            Back
          </button>
          <button type="submit" onClick={handleCloseEvaluate}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
