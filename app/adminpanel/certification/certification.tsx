import { ChangeEvent, useState } from "react";
import styles from "./certification.module.scss";
import api from "../../axios/axios";

export default function Certification() {
  const [certificationImage, setCertificationImage] = useState<string | null>(
    null
  );
  const [certificationPdf, setCertificationPdf] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    educationName: "",
    companyName: "",
  });

  const handleCertificationImageChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setCertificationImage(reader.result as string);
      };
      reader.readAsDataURL(file1);
    }
  };
  const handleCertificationPdfChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setCertificationPdf(reader.result as string);
      };
      reader.readAsDataURL(file1);
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
  async function dataPostForCertification(data: typeof formData) {
    try {
      const response = await api.post("certification", data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Network response was not ok");
      }
      // console.log("Data successfully posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = () => {
    dataPostForCertification(formData);
  };

  return (
    <section className={styles.certificationContainer}>
      <ul className={styles.certificationElement}>
        <li className={styles.certificationImage}>
          <div>
            <h3>Certification Image :</h3>
            <label htmlFor="file1" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="file1"
              name="backgroundImage"
              accept="image/*"
              onChange={handleCertificationImageChange}
            />
          </div>
          <div>
            {certificationImage && (
              <div className={styles.previewContainer}>
                <img
                  src={certificationImage}
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
        <li className={styles.certificationPdf}>
          <div>
            <h3>Certification Pdf :</h3>
            <label htmlFor="file2" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="file2"
              name="backgroundImage"
              accept="application/pdf"
              onChange={handleCertificationPdfChange}
            />
          </div>
          <div>
            {certificationPdf && (
              <div className={styles.previewContainer}>
                <img
                  src={certificationPdf}
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
      <div className={styles.emptyElement}></div>
      <ul className={styles.element}>
        <li className={styles.text}>
          <h3>Education Name :</h3>
          <input
            type="text"
            name="educationName"
            id="educationName"
            value={formData.educationName}
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
        <li className={styles.saveElement}>
          <button className={styles.saveBtn} onClick={handleSubmit}>
            Save
          </button>
        </li>
      </ul>
    </section>
  );
}
