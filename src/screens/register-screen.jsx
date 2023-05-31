import React from "react";
import { Link } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../utilities/submit-service";
import "./login-screen.css";

export default function RegisterScreen() {
  const [registerData, setRegisterData] = React.useState({
    mail: null,
    password: null,
    repeatedPassword: null,
  });
  const [registerErrors, setRegisterErrors] = React.useState({
    mail: null,
    password: null,
    repeatedPassword: null,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setRegisterErrors((prevState) => ({ ...prevState, [name]: null }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let errors = false;
    if (!isValidEmail(registerData.mail)) {
      errors = true;
      setRegisterErrors((prevState) => ({
        ...prevState,
        mail: "please provide a correct mail",
      }));
    }
    if (isValidPassword(registerData.password) !== "valid password") {
      errors = true;
      setRegisterErrors((prevState) => ({
        ...prevState,
        password: "please provide a valid password",
      }));
    }
    if (registerData.password !== registerData.repeatedPassword) {
      errors = true;
      setRegisterErrors((prevState) => ({
        ...prevState,
        repeatedPassword: "password and repeated password doesn't match",
      }));
    }
    if (errors) {
      return;
    } else {
      //TODO:handle register
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
                    placeholder="Enter email"
                    name="mail"
                    value={registerData.mail}
                    onChange={onChange}
                  />
                  {registerErrors.mail && (
                    <p className="errors">{registerErrors.mail}</p>
                  )}
                  <span></span>
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={registerData.password}
                    onChange={onChange}
                  />
                  {registerErrors.password && (
                    <p className="errors">{registerErrors.password}</p>
                  )}
                  <span></span>
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Enter repeated password"
                    name="repeatedPassword"
                    value={registerData.repeatedPassword}
                    onChange={onChange}
                  />
                  {registerErrors.repeatedPassword && (
                    <p className="errors repeated-pass-error">
                      {registerErrors.repeatedPassword}
                    </p>
                  )}
                </div>
                <button type="submit" className="submit" onClick={onSubmit}>
                  Sign up
                </button>
                <Link to="/login">
                  <p className="signup-link">
                    Already have an account account?
                    <a href="">Sign in</a>
                  </p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
