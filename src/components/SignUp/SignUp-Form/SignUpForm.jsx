import FormStyle from "./SignUpForm.module.scss";

export default function SignUpForm() {
    return (
        <form type="submit" className={FormStyle.container}>
            <input type="email" className={FormStyle.email} placeholder="Email or phone number"/>
            <input type="password" className={FormStyle.password} placeholder="Password"/>
            <input type="password" className={FormStyle.confirmPassword} placeholder="Confirm password"/>
            <button className={FormStyle.signup}>Sing Up</button>
        </form>
    );
}
