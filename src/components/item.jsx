import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

export default function Item({ id, name, description, price, photo }) {
  const [base64Image, setBase64Image] = React.useState("");

  React.useEffect(() => {
    const convertToBase64 = async () => {
      try {
        console.log(0);
        const response = await fetch(`file://${photo}`);
        console.log(1);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result;
          setBase64Image(base64String);
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error converting image to Base64:", error);
      }
    };

    convertToBase64();
  }, [photo]);

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${base64Image})` }}
      ></div>
      <h3 className="card-title">{name}</h3>
      <p className="card-price">${price}</p>
      <Link
        to={`/details?id=${id}&name=${name}&description=${description}&price=${price}&photo=${photo}`}
      >
        <button className="card-button">View Details</button>{" "}
      </Link>
    </div>
  );
}
