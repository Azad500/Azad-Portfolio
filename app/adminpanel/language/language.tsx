import { ChangeEvent, useState } from "react";
import styles from "./language.module.scss";
import api from "../../axios/axios";

export default function Language() {
  const [langIcon, setLangIcon] = useState<string | null>(null);
  const [langImage, setLangImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    languageTitle: "",
    languageDescription: "",
  });

  const handleLangIconChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setLangIcon(reader.result as string);
      };
      reader.readAsDataURL(file1);
    }
  };

  const handleLangImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setLangImage(reader.result as string);
      };
      reader.readAsDataURL(file1);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ----------------fetch-----------------
  async function dataPostForLanguage(data: typeof formData) {
    try {
      const response = await api.post("language", data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Network response was not ok");
      }
      // console.log("Data successfully posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = () => {
    dataPostForLanguage(formData);
  };

  return (
    <section className={styles.langContainer}>
      <ul className={styles.langText}>
        <li className={styles.text}>
          <h3>Language Title :</h3>
          <input
            type="text"
            name="languageTitle"
            id="languageTitle"
            value={formData.languageTitle}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.text}>
          <h3>Language Description :</h3>
          <textarea
            name="languageDescription"
            id="languageDescription"
            value={formData.languageDescription}
            onChange={handleInputChange}
          ></textarea>
        </li>
      </ul>
      <ul className={styles.langImages}>
        <li className={styles.langIcon}>
          <div>
            <h3>Language Icon :</h3>
            <label htmlFor="files1" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="files1"
              name="backgroundImage"
              accept="image/*"
              onChange={handleLangIconChange}
            />
          </div>
          <div>
            {langIcon && (
              <div className={styles.previewContainer}>
                <img
                  src={langIcon}
                  alt="Selected"
                  className={styles.previewImage}
                />
              </div>
            )}
            <div className={styles.bigBorder}>
              <p className={styles.smallBorder}>image</p>
            </div>
          </div>
        </li>
        <li className={styles.langImage}>
          <div>
            <h3>Language Image :</h3>
            <label htmlFor="files2" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="files2"
              name="backgroundImage"
              accept="image/*"
              onChange={handleLangImageChange}
            />
          </div>
          <div>
            {langImage && (
              <div className={styles.previewContainer}>
                <img
                  src={langImage}
                  alt="Selected"
                  className={styles.previewImage}
                />
              </div>
            )}
            <div className={styles.bigBorder}>
              <p className={styles.smallBorder}>image</p>
            </div>
          </div>
        </li>
        <li className={styles.saveElement}>
          <button className={styles.saveBtn} onClick={handleSubmit}>
            Save
          </button>
        </li>
      </ul>
    </section>
  );
}
