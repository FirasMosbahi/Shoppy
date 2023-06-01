import React from "react";
import FileUploadInput from "../components/file-upload-input";
import "./add-products-screen.css";
import "./home-screen.css";

export default function AddProductScreen() {
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
      const reader = new FileReader();
      reader.onloadend = () => {
        const resultValue = reader.result;
        console.log(resultValue.length);
        setProductData((prevState) => ({ ...prevState, photo: resultValue }));
        setProductDataErrors((prevState) => ({ ...prevState, photo: null }));
      };
      reader.readAsDataURL(file);
    } else {
      setProductDataErrors((prevState) => ({
        ...prevState,
        photo: "failed to load the photo",
      }));
    }
  };
  const onSubmit = (e) => {
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
    //TODO: handle creating product
  };
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Welcome dear admin
                </h1>
                <p className="lead text-white-50 mb-4">
                  You can start adding products now
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
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
    </div>
  );
}
