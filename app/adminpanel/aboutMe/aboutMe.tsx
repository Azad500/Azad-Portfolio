import { ChangeEvent, useState } from "react";
import styles from "./aboutMe.module.scss";
import api from "../../axios/axios";
export default function AboutMe() {
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [aboutImage, setAboutImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    description: "",
  });

  const handleLogoImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogoImage(reader.result as string);
      };
      reader.readAsDataURL(file1);
    }
  };
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
      const response = await api.post("aboutMe", data);

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
        <li className={styles.logoImage}>
          <div>
            <h3>Logo Image :</h3>
            <label htmlFor="files1" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="files1"
              name="backgroundImage"
              accept="image/*"
              onChange={handleLogoImageChange}
            />
          </div>
          <div>
            {logoImage && (
              <div className={styles.previewContainer}>
                <img
                  src={logoImage}
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
      </ul>
      <div className={styles.aboutText}>
        <h3>About Me Description :</h3>
        <textarea
          name="description"
          id="about"
          placeholder="About Me"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className={styles.saveElement}>
        <button className={styles.saveBtn} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </section>
  );
}
