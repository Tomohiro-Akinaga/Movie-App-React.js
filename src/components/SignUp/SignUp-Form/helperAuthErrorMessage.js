export default function helperAuthErrorMessage(errorCode) {
    const formError = { email: "", password: "", confirmPassword: "" };
    switch (errorCode) {
        case "auth/weak-password":
            formError.password = "Password strength: Weak";
            return formError;
        case "auth/email-already-in-use":
            formError.email = "User already exist";
            return formError;
    }
    return "";
}
