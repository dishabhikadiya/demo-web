import React, { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({ key: "", image: null });

  const handleInputChange = (e) => {
    // Update form data based on input changes
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    // Update form data for file input
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = "http://localhost:4000/api/create";
      const formDataForApi = new FormData();
      formDataForApi.append("key", formData.key);
      formDataForApi.append("image", formData.image);

      // Send POST request
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formDataForApi,
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
      console.log("Data submitted successfully");
      window.location.href = "/";
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add Product</h1>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <label style={styles.label}>
          Key:
          <input
            type="text"
            name="key"
            value={formData.key}
            onChange={handleInputChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Image:
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    margin: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    margin: "10px",
  },
  input: {
    padding: "8px",
    margin: "5px",
  },
  button: {
    padding: "10px",
    margin: "15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Admin;
