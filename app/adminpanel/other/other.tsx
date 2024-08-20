import { ChangeEvent, useEffect, useState } from "react";
import styles from "./other.module.scss";
import api from "../../axios/axios";

interface Rating {
  id: number;
  fullName: string;
  star: number;
  comment: string;
}

interface Certification {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export default function Other() {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [uploaded, setUploaded] = useState<Certification[]>([]);

  useEffect(() => {
    async function fetchRatings() {
      try {
        const response = await api.get("rating");

        if (response.status < 200 || response.status >= 300) {
          throw new Error("Network response was not ok");
        }

        setRatings(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchRatings();
    async function fetchUploaded() {
      try {
        const response = await api.get("uploaded");

        if (response.status < 200 || response.status >= 300) {
          throw new Error("Network response was not ok");
        }

        setUploaded(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchUploaded();
  }, []);

  return (
    <section className={styles.otherContainer}>
      <ul className={styles.ratingElement}>
        <h2>Rating</h2>
        <div className={styles.comments}>
          <h3>Number of Comments : {ratings.length}</h3>
        </div>
        <div className={styles.ratingContainer}>
          {ratings.map((rating) => (
            <div className={styles.rating} key={rating.id}>
              <p>
                {rating.fullName} : {rating.star} <span>★</span>
              </p>
              <p>{rating.comment}</p>
            </div>
          ))}
        </div>
      </ul>
      <ul className={styles.downloadCertification}>
        <h2>Who uploaded the certificate?</h2>
        <div className={styles.comments}>
          <h3>Number of Comments : {uploaded.length}</h3>
        </div>
        <div className={styles.certificationContainer}>
          {uploaded.map((upload) => (
            <div className={styles.certification} key={upload.id}>
              <p>
                {upload.name} {upload.surname}
              </p>
              <p>{upload.email}</p>
            </div>
          ))}
        </div>
      </ul>
    </section>
  );
}
