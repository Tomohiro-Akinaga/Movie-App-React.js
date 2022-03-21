import SignUpStyle from "./SignUp.module.scss";
import SignUpContent from "./SignUp-Content/SignUpContent.jsx";

export default function SignUp() {
    return (
        <div className={SignUpStyle.container}>
            <div className={SignUpStyle.backdrop}>
                <h1 className={SignUpStyle.logo}>Movieflex</h1>
                <SignUpContent />
            </div>
        </div>
    );
}
