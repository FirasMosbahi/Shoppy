import React from "react";
import { Link } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../utilities/submit-service";
import "./login-screen.css";
import axiosFetch from "../hooks/fetch-api";

export default function LoginScreen() {
  const [state, setState] = React.useState(null);
  const [loginData, setLoginData] = React.useState({
    mail: null,
    password: null,
  });
  const [loginErrors, setLoginErrors] = React.useState({
    mail: null,
    password: null,
  });
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setLoginErrors((prevState) => ({ ...prevState, [name]: null }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let errors = false;
    if (!isValidEmail(loginData.mail)) {
      errors = true;
      setLoginErrors((prevState) => ({
        ...prevState,
        mail: "please provide a correct mail",
      }));
    }
    if (isValidPassword(loginData.password) !== "valid password") {
      errors = true;
      setLoginErrors((prevState) => ({
        ...prevState,
        password: "please provide a valid password",
      }));
    }
    console.log(loginErrors);
    if (errors) {
      return;
    } else {
      const result = await axiosFetch(
        "http://localhost:5000/user/login",
        "post",
        loginData
      );
      localStorage.setItem("userId", result.response.id);
      localStorage.setItem("token", result.response.token);
      console.log(localStorage.getItem("userId"));
      setState(result.response);
    }
  };
  return (
    <div className="bg-dark py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <div className="text-center my-5">
              <form className="form">
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                  <input
                    type="email"
                    name="mail"
                    placeholder="Enter email"
                    value={loginData.mail}
                    onChange={onChange}
                  />
                  {loginErrors.mail && (
                    <p className="errors">{loginErrors.mail}</p>
                  )}
                  <span></span>
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={loginData.password}
                    onChange={onChange}
                  />
                  {loginErrors.password && (
                    <p className="errors">{loginErrors.password}</p>
                  )}
                </div>
                <button type="submit" className="submit" onClick={onSubmit}>
                  Sign in
                </button>
                <Link to="/signup">
                  <p className="signup-link">
                    No account?
                    <a href="">Sign up</a>
                  </p>
                </Link>
              </form>
            </div>
            <p>{state ? "user logged in successfuly" : "failed to login"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
