import React from "react";
import "./file-upload-input.css";

export default function FileUploadInput({ onChange }) {
  return (
    <form className="form">
      <span className="form-title">Upload your product image</span>
      <p className="form-paragraph">File should be an image</p>
      <label htmlFor="file-input" className="drop-container">
        <span className="drop-title">Drop files here</span>
        or
        <input
          type="file"
          accept="image/*"
          required=""
          id="file-input"
          onChange={onChange}
        />
      </label>
    </form>
  );
}
