export default function helperErrorMessage(
    errorCode,
    email,
    password,
    confirmPassword
) {
    const formError = { email: "", password: "", confirmPassword: "" };
    if (password !== confirmPassword) {
        formError.confirmPassword = "The passwords do not match";
    }
    if (!email) {
        formError.email = "Enter the email";
    }
    if (!password) {
        formError.password = "Enter the password";
    }
    if (!confirmPassword) {
        formError.confirmPassword = "Enter the confirm password";
    }
    switch (errorCode) {
        case "auth/weak-password":
            formError.password = "Password strength: Weak";
            return formError;
            break;
        case "auth/email-already-in-use":
            formError.email = "User already exist";
            return formError;
            break;
        case "auth/invalid-email":
            formError.email = "Enter valid email";
            return formError;
            break;
    }
    return formError;
}
