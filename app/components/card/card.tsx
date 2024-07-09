import Image from "next/image";
import styles from "./card.module.scss";

interface CardProps {
  handlePopUp: (id: number) => void;
  cardElements: CardElement[];
}

interface CardElement {
  id: number;
  name: string;
  image: StaticImageData;
  alt: string;
  job: string;
  pdf: string;
}

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
export default function Card({ handlePopUp, cardElements }: CardProps) {
  return (
    <section className={styles.cardContainer}>
      {cardElements.map((cardElement, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.content}>
            <div className={styles.front}>
              <div className={styles.images}>
                <Image
                  src={cardElement.image}
                  alt={cardElement.alt}
                  width={250}
                  height={300}
                  priority
                />
              </div>
              <div className={styles.overlay}>
                <h2>{cardElement.name}</h2>
                <p>{cardElement.job}</p>
              </div>
            </div>
            <div className={styles.back}>
              <button onClick={() => handlePopUp(cardElement.id)}>
                Download
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
