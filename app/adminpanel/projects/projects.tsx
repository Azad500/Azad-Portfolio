import { ChangeEvent, useState } from "react";
import styles from "./projects.module.scss";
import api from "../../axios/axios";
export default function Project() {
  const [companyImage, setCompanyImage] = useState<string | null>(null);
  const [projectImage, setProjectImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    companyTitle: "",
    companyDescription: "",
    projectTitle: "",
    siteLink: "",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    description9: "",
    description10: "",
    description11: "",
    description12: "",
    description13: "",
    description14: "",
    description15: "",
  });

  const handleCompanyImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setCompanyImage(reader.result as string);
      };
      reader.readAsDataURL(file1);
    }
  };

  const handleProjectImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file1 = event.target.files?.[0];
    if (file1) {
      const reader = new FileReader();
      reader.onload = () => {
        setProjectImage(reader.result as string);
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
  async function dataPostForProjects(data: typeof formData) {
    try {
      const response = await api.post("projects", data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Network response was not ok");
      }
      // console.log("Data successfully posted:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = () => {
    dataPostForProjects(formData);
  };

  return (
    <section className={styles.projectsContainer}>
      {/* ------------companyElement---------- */}
      <ul className={styles.companyElement}>
        <li className={styles.text}>
          <h3>Company Title :</h3>
          <input
            type="text"
            name="companyTitle"
            id="companyTitle"
            value={formData.companyTitle}
            onChange={handleInputChange}
          />
        </li>
        <li className={styles.text}>
          <h3>Company Description :</h3>
          <textarea
            name="companyDescription"
            id="companyDescription"
            value={formData.companyDescription}
            onChange={handleInputChange}
          ></textarea>
        </li>
        <li className={styles.companyImage}>
          <div>
            <h3>Company Image :</h3>
            <label htmlFor="files1" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="files1"
              name="backgroundImage"
              accept="image/*"
              onChange={handleCompanyImageChange}
            />
          </div>
          <div>
            {companyImage && (
              <div className={styles.previewContainer}>
                <img
                  src={companyImage}
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
        <li className={styles.projectImage}>
          <div>
            <h3>Project Image :</h3>
            <label htmlFor="files2" className={styles.btn}>
              +
            </label>
            <input
              type="file"
              id="files2"
              name="backgroundImage"
              accept="image/*"
              onChange={handleProjectImageChange}
            />
          </div>
          <div>
            {projectImage && (
              <div className={styles.previewContainer}>
                <img
                  src={projectImage}
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
      {/* ------------projectElement---------- */}
      <ul className={styles.projectElement}>
        <li className={styles.text}>
          <h3>Project Title :</h3>
          <input
            type="text"
            name="projectTitle"
            id="projectTitle"
            value={formData.projectTitle}
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
        <li className={styles.descriptions}>
          <h3>Project Description :</h3>
          <div className={styles.descriptionsInput}>
            <input
              type="text"
              name="description1"
              id="description1"
              value={formData.description1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description2"
              id="description2"
              value={formData.description2}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description3"
              id="description3"
              value={formData.description3}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description4"
              id="description4"
              value={formData.description4}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description5"
              id="description5"
              value={formData.description5}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description6"
              id="description6"
              value={formData.description6}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description7"
              id="description7"
              value={formData.description7}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description8"
              id="description8"
              value={formData.description8}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description9"
              id="description9"
              value={formData.description9}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description10"
              id="description10"
              value={formData.description10}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description11"
              id="description11"
              value={formData.description11}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description12"
              id="description12"
              value={formData.description12}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description13"
              id="description13"
              value={formData.description13}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description14"
              id="description14"
              value={formData.description14}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description15"
              id="description15"
              value={formData.description15}
              onChange={handleInputChange}
            />
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
