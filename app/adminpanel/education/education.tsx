import { ChangeEvent, useState } from "react";
import styles from "./education.module.scss";
import api from "../../axios/axios";

export default function Education() {
  const [educationImage, setEducationImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    educationText: "",
    educationTitle: "",
    companyName: "",
    educationDescription: "",
    location: "",
    date: "",
    companySite: "",
    siteLink: "",
  });

  const handleEducationImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setEducationImage(reader.result as string);
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
  async function dataPostForEducation(data: typeof formData) {
    try {
      const response = await api.post("education", data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Network response was not ok");
      }
      // console.log("Data successfully posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = () => {
    dataPostForEducation(formData);
  };

  return (
    <section className={styles.educationContainer}>
      <ul className={styles.educationElement}>
        <li>
          <h2>Education Text :</h2>
          <textarea
            name="educationText"
            id="educationText"
            value={formData.educationText}
            onChange={handleInputChange}
          ></textarea>
        </li>
      </ul>
      <ul className={styles.element}>
        <li className={styles.text}>
          <h3>Education Title :</h3>
          <input
            type="text"
            name="educationTitle"
            id="educationTitle"
            value={formData.educationTitle}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.text}>
          <h3>Company Name :</h3>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.text}>
          <h3>Education Description :</h3>
          <textarea
            name="educationDescription"
            id="educationDescription"
            value={formData.educationDescription}
            onChange={handleInputChange}
          ></textarea>
        </li>
        <li className={styles.text}>
          <h3>Location :</h3>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.text}>
          <h3>Date :</h3>
          <input
            type="text"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.text}>
          <h3>Company Site :</h3>
          <input
            type="text"
            name="companySite"
            id="companySite"
            value={formData.companySite}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.text}>
          <h3>Site Link :</h3>
          <input
            type="text"
            name="siteLink"
            id="siteLink"
            value={formData.siteLink}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.companyImage}>
          <div>
            <h3>Company Image :</h3>
            <label htmlFor="file" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="file"
              name="backgroundImage"
              accept="image/*"
              onChange={handleEducationImageChange}
            />
          </div>
          <div>
            {educationImage && (
              <div className={styles.previewContainer}>
                <img
                  src={educationImage}
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
