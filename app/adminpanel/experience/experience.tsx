import { ChangeEvent, useState } from "react";
import styles from "./experience.module.scss";
import api from "../../axios/axios";
export default function Experience() {
  const [workHistoryImage, setWorkHistoryImage] = useState<string | null>(null);
  const [jobImage, setJobImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    workTitle: "",
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    date: "",
    companySite: "",
    siteLink: "",
  });

  const handleWorkHistoryImageChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setWorkHistoryImage(reader.result as string);
      };
      reader.readAsDataURL(file1);
    }
  };

  const handleJobImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setJobImage(reader.result as string);
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
  async function dataPostForExperience(data: typeof formData) {
    try {
      const response = await api.post("experience", data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Network response was not ok");
      }
      // console.log("Data successfully posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = () => {
    dataPostForExperience(formData);
  };

  return (
    <section className={styles.experienceContainer}>
      <ul className={styles.experienceElement}>
        <li>
          <h2>Work Text :</h2>
          <textarea
            name="workTitle"
            id="workTitle"
            value={formData.workTitle}
            onChange={handleInputChange}
          ></textarea>
        </li>
        <li className={styles.workHistoryImage}>
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
              onChange={handleWorkHistoryImageChange}
            />
          </div>
          <div>
            {workHistoryImage && (
              <div className={styles.previewContainer}>
                <img
                  src={workHistoryImage}
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
      <ul className={styles.jobsElement}>
        <li className={styles.text}>
          <h3>Job Title :</h3>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={formData.jobTitle}
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
          <h3>Job Description :</h3>
          <textarea
            name="jobDescription"
            id="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
          ></textarea>
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
            <label htmlFor="files2" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="files2"
              name="backgroundImage"
              accept="image/*"
              onChange={handleJobImageChange}
            />
          </div>
          <div>
            {jobImage && (
              <div className={styles.previewContainer}>
                <img
                  src={jobImage}
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
