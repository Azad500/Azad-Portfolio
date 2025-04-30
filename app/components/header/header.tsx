import Image from "next/image";
import styles from "./header.module.scss";
import HeaderPhoto from "../../../assets/images/headerPhoto.jpeg";
import api from "@/app/axios/axios";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const [title, setTitle] = useState<string>("Loading..."); // Varsayılan değer ekleyin

  async function fetchData() {
    try {
      const response = await api.get("entry");
      if (response.status === 200) {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setTitle(response.data[0].title);
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerPhoto}>
        <div className={styles.overlay}></div>
        <Image
          className={styles.image}
          src={HeaderPhoto}
          alt="Header Photo"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className={styles.headerText}>
        <h2>Hello,</h2>
        <h2>
          {/* I am <span>{title}</span> */}I am{" "}
          <span> Front end Developer</span>
        </h2>
      </div>
      <div className={styles.borderBottom}>
        <p></p>
      </div>
    </header>
  );
}
