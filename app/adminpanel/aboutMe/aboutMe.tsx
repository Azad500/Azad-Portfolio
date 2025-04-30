import { ChangeEvent, useState } from "react";
import styles from "./aboutMe.module.scss";
import api from "../../axios/axios";
export default function AboutMe() {
  const [aboutImage, setAboutImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    description: "",
  });

  const handleAboutImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file2 = event.target.files?.[0];
    if (file2) {
      const reader = new FileReader();
      reader.onload = () => {
        setAboutImage(reader.result as string);
      };
      reader.readAsDataURL(file2);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ----------------fetch-----------------
  async function dataPostForAboutMe(data: typeof formData) {
    try {
      const response = await api.post("aboutme", data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Network response was not ok");
      }
      // console.log("Data successfully posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = () => {
    dataPostForAboutMe(formData);
  };

  return (
    <section className={styles.aboutMeContainer}>
      <ul className={styles.images}>
        <li className={styles.aboutImage}>
          <div>
            <h3>About Image :</h3>
            <label htmlFor="files2" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="files2"
              name="backgroundImage"
              accept="image/*"
              onChange={handleAboutImageChange}
            />
          </div>
          <div>
            {aboutImage && (
              <div className={styles.previewContainer}>
                <img
                  src={aboutImage}
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
        <li className={styles.aboutText}>
          <h3>About Me Description :</h3>
          <textarea
            name="description"
            id="about"
            placeholder="About Me"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </li>
      </ul>
      <div className={styles.saveElement}>
        <button className={styles.saveBtn} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </section>
  );
}
