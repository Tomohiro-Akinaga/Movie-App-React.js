import Link from "react-router-dom";
import SignInContentStyle from "./SignInContent.module.scss";
import SignInForm from "../SignIn-Form/SignInForm";

export default function SignInContent() {
    return (
        <div className={SignInContentStyle.content}>
            <h2 className={SignInContentStyle.subtitle}>Sign In</h2>
            <SignInForm />
            <div className={SignInContentStyle.signin}>
                <p className={SignInContentStyle.text}>Not member yet ?</p>
                <a className={SignInContentStyle.link}>Sign Up</a>
                {/* <Link to="/signin">Sign In</Link> */}
            </div>
        </div>
    );
}
