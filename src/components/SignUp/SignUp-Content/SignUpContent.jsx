import Link from "react-router-dom";
import SignUpContentStyle from "./SignUpContent.module.scss";
import SignUpForm from "../SignUp-Form/SignUpForm.jsx";

export default function SignUpContent() {
    return (
        <div className={SignUpContentStyle.content}>
            <h2 className={SignUpContentStyle.subtitle}>Sign Up</h2>
            <SignUpForm />
            <div className={SignUpContentStyle.signin}>
                <p className={SignUpContentStyle.text}>Already member ?</p>
                <a className={SignUpContentStyle.link}>Sign In</a>
                {/* <Link to="/signin">Sign In</Link> */}
            </div>
        </div>
    );
}
