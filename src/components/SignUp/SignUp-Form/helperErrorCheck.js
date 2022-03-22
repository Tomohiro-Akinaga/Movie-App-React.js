export default function helperErrorMessage(email, password, confirmPassword) {
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
    return formError;
}
