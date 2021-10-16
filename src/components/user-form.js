import React, { useState } from "react";
import styles from '../App.module.scss'

export default function SignInForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  const usernameRegex = /^[a-z0-9\.\_]{5,15}$/

  const nameRegex = /^[a-zA-Z \.\']{2,30}$/

  const passwordRegex = /[!@#$%^&*(){}[\]<>?/|.:;_-]/

  const handleSubmit = () => {
    if (name.trim() === "") {
      return setNameError('Name Cannot be empty')
    }
    if (username.trim() === "") {
      return setNameError('Username Cannot be empty')
    }
    if (email.trim() === "") {
      return setNameError('Email Cannot be empty')
    }
    if (password.trim() === "") {
      return setNameError('Password Cannot be empty')
    }
    if (!nameRegex.test(name.trim())) {
      return setNameError('Invalid Name')
    }
    if (!usernameRegex.test(username.trim())) {
      return setUsernameError('Invalid Username')
    }
    if (!emailRegex.test(email.trim())) {
      return setEmailError('Invalid Email')
    }
    if (!passwordRegex.test(password.trim())) {
      return setPasswordError('Invalid Password')
    }
    alert(
      `The form was submitted with the following data: name: ${name}, username: ${username}, email: ${email}, password: ${password}`
      );
  };
  return (
    <div className={styles.formCenter}>
      <form className={styles.formFields} onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>
            Name
          </label>
          <input
            type="text"
            className={styles.formFieldInput}
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>setName(e.target.value)}
          />
          <span className={styles.formFieldError}>{nameError}</span>
        </div>

        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>
            Username
          </label>
          <input
            type="text"
            className={styles.formFieldInput}
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className={styles.formFieldError}>{usernameError}</span>
        </div>

        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>
            E-Mail Address
          </label>
          <input
            type="email"
            className={styles.formFieldInput}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className={styles.formFieldError}>{emailError}</span>
        </div>

        <div className={styles.formField}>
          <label className={styles.formFieldLabel}>
            Password
          </label>
          <input
            type="password"
            className={styles.formFieldInput}
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={styles.formFieldError}>{passwordError}</span>
        </div>

        <div className={styles.formField}>
          <button onClick={handleSubmit} className={styles.formFieldButton}>
            Validate
          </button>
        </div>
      </form>
    </div>
  );
}
