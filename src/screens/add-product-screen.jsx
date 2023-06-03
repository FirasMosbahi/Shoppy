import React from "react";
import FileUploadInput from "../components/file-upload-input";
import "./add-products-screen.css";
import "./home-screen.css";
import axiosFetch from "../hooks/fetch-api";
import uploadToImgur from "../utilities/upload-to-imgur";
import AppHeader from "../components/app-header";
import { Form } from "react-router-dom";

export default function AddProductScreen() {
  let [result, setResult] = React.useState({
    loading: false,
    result: false,
    error: false,
  });
  const [productData, setProductData] = React.useState({
    name: null,
    description: null,
    price: null,
    photo: null,
  });
  const [productDataErrors, setProductDataErrors] = React.useState({
    name: null,
    description: null,
    price: null,
    photo: null,
    quantity: 100,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setProductDataErrors((prevState) => ({ ...prevState, [name]: null }));
  };
  const fileUploadInputOnChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData((prevState) => ({ ...prevState, photo: file }));
      setProductDataErrors((prevState) => ({ ...prevState, photo: null }));
    } else {
      setProductDataErrors((prevState) => ({
        ...prevState,
        photo: "failed to load the photo",
      }));
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let errors = false;
    if (!productData.name) {
      setProductDataErrors((prevState) => ({
        ...prevState,
        name: "please provide a name",
      }));
      errors = true;
    }
    if (!productData.price) {
      setProductDataErrors((prevState) => ({
        ...prevState,
        price: "please provide a price",
      }));
      errors = true;
    }
    if (!productData.description) {
      setProductDataErrors((prevState) => ({
        ...prevState,
        description: "please provide a description",
      }));
      errors = true;
    }
    if (!productData.photo) {
      setProductDataErrors((prevState) => ({
        ...prevState,
        photo: "please provide a photo",
      }));
      errors = true;
    }
    if (errors) {
      return;
    }
    setResult((prevState) => ({ ...prevState, loading: true }));
    const formData = new FormData();

    for (const key in productData) {
      formData.append(key, productData[key]);
    }
    let state = await axiosFetch(
      "http://localhost:5000/product",
      "post",
      formData
    );
    setResult({ result: state.result, error: state.error, loading: false });
  };
  return (
    <div>
      <AppHeader
        title="Welcome dear admin"
        content="You can start adding products now"
      />
      <div className="card">
        <span className="title">Add a product</span>
        <form className="form-group">
          <div className="inputs">
            <div className="text-inputs">
              <div className="group">
                <input
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={productData.name}
                  onChange={onChange}
                  required=""
                />
                {productDataErrors.name && (
                  <p className="errors">{productDataErrors.name}</p>
                )}
              </div>
              <div className="group">
                <input
                  placeholder="Price"
                  type="number"
                  id="Price"
                  name="price"
                  value={productData.price}
                  onChange={onChange}
                  required=""
                />
                {productDataErrors.price && (
                  <p className="errors">{productDataErrors.price}</p>
                )}
              </div>
              <div className="group">
                <textarea
                  placeholder="Description"
                  id="Description"
                  name="description"
                  rows="5"
                  value={productData.description}
                  onChange={onChange}
                  required=""
                ></textarea>
                {productDataErrors.description && (
                  <p className="errors">{productDataErrors.description}</p>
                )}
              </div>
            </div>
            <div className="image-input">
              <FileUploadInput onChange={fileUploadInputOnChange} />
              {productDataErrors.photo && (
                <p className="errors">{productDataErrors.photo}</p>
              )}
            </div>
          </div>
          <button type="submit" onClick={onSubmit}>
            Add Product
          </button>
        </form>
      </div>
      <p>
        {result.error
          ? "an error has occured"
          : result.result
          ? "item added successfuly"
          : "please wait ..."}
      </p>
    </div>
  );
}
