import SignInStyle from "./SignIn.module.scss";
// import SignInContent from "./SignIn-Content/SignInContent.jsx";

export default function SignIn() {
    return (
        <div className={SignInStyle.container}>
            <div className={SignInStyle.backdrop}>
                <h1 className={SignInStyle.logo}>Movieflex</h1>
                {/* <SignInContent /> */}
            </div>
        </div>
    );
}
