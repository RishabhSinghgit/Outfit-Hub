import { signInWithPopupMethod, createUserDocumentFromAuth } from "../../utils/firebase.utils";

const SignIn = ( ) =>{
   
     const logGoogleUser = async ()=>{
        const { user} = await signInWithPopupMethod();
        createUserDocumentFromAuth(user)
     }

    return (
        <div>
            <h1>THIS IS SignIn COMPONENNT</h1>
            <button onClick={logGoogleUser}>Google SingIn</button>
        </div>
    )
}

export default SignIn