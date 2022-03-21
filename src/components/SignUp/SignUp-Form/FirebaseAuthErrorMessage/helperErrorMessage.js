export default function helperErrorMessage(message) {
    switch (message) {
        case "auth/configuration-not-found":
            return "Enter valid emali";
            break;
    }
    return "";
}
