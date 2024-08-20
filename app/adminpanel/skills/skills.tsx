import { ChangeEvent, useState } from "react";
import styles from "./skills.module.scss";
import api from "../../axios/axios";
import imageCompression from "browser-image-compression";

export default function Skills() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    text: "",
    image: "",
  });

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          setSelectedImage(base64String);
          setFormData((prevData) => ({
            ...prevData,
            image: base64String,
          }));
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function dataPostForSkills(data: typeof formData) {
    try {
      const response = await api.post("skills", data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Network response was not ok");
      }
      // console.log("Data successfully posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = () => {
    dataPostForSkills(formData);
  };

  return (
    <section className={styles.skillsContainer}>
      <ul className={styles.skillImageElement}>
        <li>
          <h2>Skill Image :</h2>
          <label htmlFor="files" className={styles.btn}>
            +
          </label>
          <input
            type="file"
            id="files"
            name="backgroundImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </li>
        <li>
          {selectedImage && (
            <div className={styles.previewContainer}>
              <img
                src={selectedImage}
                alt="Selected"
                className={styles.previewImage}
              />
            </div>
          )}
          <div className={styles.bigBorder}>
            <p className={styles.smallBorder}>image</p>
          </div>
        </li>
      </ul>
      <div className={styles.emptyElement}></div>
      <div className={styles.skillText}>
        <h2>Skill Text :</h2>
        <input
          type="text"
          name="text"
          id="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.saveElement}>
        <button className={styles.saveBtn} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </section>
  );
}
