import { signInWithPopupMethod, createUserDocumentFromAuth, signInWithGoogleRedirect, createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import SignInForm from "./Signin-form.component";

const SignIn = ( ) =>{
   
     const logGoogleUser = async ()=>{
        const { user} = await signInWithGoogleRedirect();
        const userDocRef =  await createUserDocumentFromAuth(user);
     }

    return (
        <div>
            <h1>Sign In With Google's signInWithPopupMethod</h1>
            <button onClick={logGoogleUser}>Google SingIn PopUp</button>
            <SignInForm  />
        </div>
    )
} 

export default SignIn