import Link from "react-router-dom";
import SignInContentStyle from "./SignInContent.module.scss";
// import SignInForm from "../SignIn-Form/SignInForm.jsx";

export default function SignInContent() {
    return (
        <div className={SignInContentStyle.content}>
            <h2 className={SignInContentStyle.subtitle}>Sign Up</h2>
            {/* <SignInForm /> */}
            <div className={SignInContentStyle.signin}>
                <p className={SignInContentStyle.text}>Already member ?</p>
                <a className={SignInContentStyle.link}>Sign In</a>
                {/* <Link to="/signin">Sign In</Link> */}
            </div>
        </div>
    );
}
