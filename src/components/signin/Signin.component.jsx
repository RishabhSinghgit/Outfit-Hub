import { signInWithPopupMethod, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase.utils";

const SignIn = ( ) =>{
   
     const logGoogleUser = async ()=>{
        const { user} = await signInWithPopupMethod();
        const userDocRef =  await createUserDocumentFromAuth(user);
     }

    return (
        <div>
            <h1>Sign In With Google's signInWithPopupMethod</h1>
            <button onClick={logGoogleUser}>Google SingIn PopUp</button>
        </div>
    )
} 

export default SignIn