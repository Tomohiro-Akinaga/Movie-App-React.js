import { Link } from "react-router-dom";
import SignInContentStyle from "./SignInContent.module.scss";
import SignInForm from "../SignIn-Content/SignIn-Form/SignInForm";

export default function SignInContent() {
    return (
        <div className={SignInContentStyle.content}>
            <h2 className={SignInContentStyle.subtitle}>Sign In</h2>
            <SignInForm />
            <div className={SignInContentStyle.signin}>
                <p className={SignInContentStyle.text}>Not member yet ?</p>
                <Link to="/signup" className={SignInContentStyle.link}>Sign Up</Link>
            </div>
        </div>
    );
}
