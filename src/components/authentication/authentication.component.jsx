
import SignUpForm from "../signup/signup-form-component";
import SignInForm from "../signin/signin-form-component";
import './authentication.styles.scss'

const Authentication = ( ) =>{
   
   

    return (
        <div className="authentication-container">
            <SignInForm   />
            <SignUpForm  />
        </div>
    )
} 

export default Authentication