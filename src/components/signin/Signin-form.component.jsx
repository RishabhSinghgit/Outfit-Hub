import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/Button.component";

const defaultFormFields = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignInForm = () => {
  const [values, setValues] = useState(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const { userName, email, password, confirmPassword } = values;

  const handleReset = ()=>{
    setValues(defaultFormFields)
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, userName);
      handleReset();

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email Already In Use!");
      }
      console.log(`Erro while User Creation `, error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't Have an account</h2>
      <span>SignUp With Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          value={userName}
          name="userName"
          onChange={handleChange}
          label="Display Name"
        />

        <FormInput
          required
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          label="Email"
        />

        <FormInput
          required
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          label="Password"
        />

        <FormInput
          required
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          label="Confirm Password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignInForm;
