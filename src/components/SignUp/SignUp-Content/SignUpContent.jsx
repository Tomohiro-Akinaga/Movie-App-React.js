import { Link } from "react-router-dom";
import SignUpContentStyle from "./SignUpContent.module.scss";
import SignUpForm from "../SignUp-Content/SignUp-Form/SignUpForm";

export default function SignUpContent() {
    return (
        <div className={SignUpContentStyle.content}>
            <h2 className={SignUpContentStyle.subtitle}>Sign Up</h2>
            <SignUpForm />
            <div className={SignUpContentStyle.signin}>
                <p className={SignUpContentStyle.text}>Already member ?</p>
                <Link to="/signin" className={SignUpContentStyle.link}>Sign In</Link>
            </div>
        </div>
    );
}
