import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGoogleRedirect
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './signin-form.styles.scss'
import Button from "../button/button-component";


const defaultFormFields = {

  email: "",
  password: "",

};
const SignInForm = () => {
  const [values, setValues] = useState(defaultFormFields);
  const { email, password } = values;

  const handleReset = () => {
    setValues(defaultFormFields)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      await signInAuthUserWithEmailAndPassword(email, password);
      handleReset();

    } catch (error) {

      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Credentials')
          break;

        case 'auth/user-not-found':
          alert('Invalid User')
          break;

        case 'auth/invalid-credential':
          alert('Invalid User')
          break;

        default:
          console.log(`Error While SingIn`, error.code)
          break;
      }

    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };


  const signInWithGoogle = async () => {
      await signInWithGoogleRedirect();
  }
 
  return (
    <div className="sign-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>

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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
