import { useState, ChangeEvent } from "react";
import styles from "./entry.module.scss";
import api from "../../axios/axios";

const Entry: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    github: "",
    whatsapp: "",
    linkedin: "",
  });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // ----------------fetch-----------------
  async function dataPostForEntry(data: typeof formData) {
    try {
      const response = await api.post("entryElement", data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Network response was not ok");
      }
      // console.log("Data successfully posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = () => {
    dataPostForEntry(formData);
  };

  return (
    <section className={styles.entryContainer}>
      <ul className={styles.backgroundImageElement}>
        <li>
          <h2>Hello, I am : </h2>
          <input
            type="text"
            name="text"
            id="text"
            value={formData.title}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <h3>Background Image :</h3>
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
      <ul className={styles.sosialNetworkContainer}>
        <li>
          <h2>Email : </h2>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <h2>Github : </h2>
          <input
            type="text"
            name="github"
            id="github"
            value={formData.github}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <h2>Whatsapp : </h2>
          <input
            type="text"
            name="whatsapp"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <h2>Linkedin : </h2>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
        </li>
      </ul>
      <div className={styles.emptyElement}></div>
      <div className={styles.saveElement}>
        <button className={styles.saveBtn} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </section>
  );
};

export default Entry;
