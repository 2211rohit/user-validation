import React, { useState } from "react";
import styles from "../App.module.scss";

export default function SignInForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [fields, setFields] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const usernameRegex = /^[a-z0-9_]+$/;
  const nameRegex = /^[a-zA-Z ]+$/;

  const handleNameChange = (value) => {
    const error = "Name can only contain characters";
    if (value.length !== 0) {
      if (!nameRegex.test(value.trim())) {
        setNameError(error);
        setFieldErrors(Object.assign(fieldErrors, { name: error }));
      }
    }
    setName(value);
    setNameError(null);
    setFieldErrors(Object.assign(fieldErrors, { name: null }));
    setFields(Object.assign(fields, { name: value }));
  };

  const handleUsernameChange = (value) => {
    const error = "username can only contain characters and underscore('_')";
    if (value.length !== 0) {
      if (!usernameRegex.test(value.trim())) {
        setUsernameError(error);
        setFieldErrors(Object.assign(fieldErrors, { username: error }));
      }
    }
    setUsername(value);
    setUsernameError(null);
    setFieldErrors(Object.assign(fieldErrors, { username: null }));
    setFields(Object.assign(fields, { username: value }));
  };

  const handleEmailChange = (value) => {
    let atPos = value.indexOf("@");
    let dotPos = value.indexOf(".");
    if (value.indexOf("@") === -1) {
      setEmail(value);
      setFields(Object.assign(fields, { email: value }));
      setEmailError("@ is missing");
      return setFieldErrors(
        Object.assign(fieldErrors, { email: "@ is missing" })
      );
    } else if (atPos > dotPos) {
      setEmail(value);
      setFields(Object.assign(fields, { email: value }));
      setEmailError(". is missing");
      return setFieldErrors(
        Object.assign(fieldErrors, { email: ". is missing" })
      );
    } else if (dotPos > value.length - 3) {
      setEmail(value);
      setFields(Object.assign(fields, { email: value }));
      setEmailError("Extension is missing");
      return setFieldErrors(
        Object.assign(fieldErrors, { email: "Extension is missing" })
      );
    } else if (!emailRegex.test(value.trim())) {
      setEmail(value);
      setFields(Object.assign(fields, { email: value }));
      setEmailError("Invalid Email");
      return setFieldErrors(
        Object.assign(fieldErrors, { email: "Invalid Email" })
      );
    } else {
      setEmail(value);
      setEmailError(null);
      setFieldErrors(Object.assign(fieldErrors, { email: null }));
      setFields(Object.assign(fields, { email: value }));
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordError(null);
    setFieldErrors(Object.assign(fieldErrors, { password: null }));
    setFields(Object.assign(fields, { password: value }));
  };

  const checkEmpty = async (key) => {
    if (fields[key].length === 0) {
      const errorObj = { ...fieldErrors, [key]: `${key} cannot be empty` };
      console.log(key, errorObj);
      return setFieldErrors(errorObj);
    }
  };

  const noError = (fields) => {
    let result = Object.values(fields).every((field) => field === null);
    return result;
  };

  const handleSubmit = async () => {
    Object.keys(fields).map((field) => checkEmpty(field));
    if (noError(fieldErrors)) {
      alert(
        `The form was submitted with the following data: name: ${name}, username: ${username}, email: ${email}, password: ${password}`
      );
    }
  };
  return (
    <div className={styles.formCenter}>
      <div className={styles.formTitle}>
        <h4 className={styles.formTitleLink}>Fill up here!</h4>
      </div>
      <div className={styles.formFields}>
        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>Name</label>
          <input
            type="text"
            className={styles.formFieldInput}
            placeholder="Enter your name"
            name={"name"}
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
          <span className={styles.formFieldError}>
            {fieldErrors.name || nameError}
          </span>
        </div>

        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>Username</label>
          <input
            type="text"
            className={styles.formFieldInput}
            placeholder="Enter your username"
            name={"username"}
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
          <span className={styles.formFieldError}>
            {fieldErrors.username || usernameError}
          </span>
        </div>

        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>E-Mail Address</label>
          <input
            type="email"
            className={styles.formFieldInput}
            placeholder="Enter your email"
            name={"email"}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          <span className={styles.formFieldError}>
            {fieldErrors.email || emailError}
          </span>
        </div>

        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>Password</label>
          <input
            type="password"
            className={styles.formFieldInput}
            placeholder="Enter your password"
            name={"password"}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <span className={styles.formFieldError}>
            {fieldErrors.password || passwordError}
          </span>
        </div>

        <div className={styles.formField}>
          <button
            onClick={() => handleSubmit()}
            className={styles.formFieldButton}
          >
            Validate
          </button>
        </div>
      </div>
    </div>
  );
}
