export default function helperErrorCheck(errorCode, email, password) {
    const formError = { email: "", password: "" };
    if (!email) {
        formError.email = "Enter the email";
    }
    if (!password) {
        formError.password = "Enter the password";
    }
    switch (errorCode) {
        case "auth/weak-password":
            formError.password = "Password strength: Weak";
            return formError;
            break;
        case "auth/user-not-found":
            formError.email = "User does not exist";
            return formError;
            break;
        case "auth/invalid-email":
            formError.email = "Enter valid email";
            return formError;
            break;
    }
    return formError;
}
