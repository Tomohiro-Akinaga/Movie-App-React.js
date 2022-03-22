import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../config/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import FirebaseAuthErrorMessage from "./FirebaseAuthErrorMessage/FirebaseAuthErrorMessage";
import helperErrorCheck from "./helperErrorCheck";
import FormStyle from "./SignInForm.module.scss";

export default function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    };

    return (
        <form
            type="submit"
            onSubmit={handleSubmit}
            className={FormStyle.container}
        >
            <input
                type="email"
                value={email}
                className={FormStyle.email}
                placeholder="Email or phone number"
                onChange={(e) => setEmail(e.target.value)}
            />
            {formError.email && (
                <FirebaseAuthErrorMessage formError={formError.email} />
            )}
            <input
                type="password"
                value={password}
                className={FormStyle.password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {formError.password && (
                <FirebaseAuthErrorMessage formError={formError.password} />
            )}
            <button type="submit" className={FormStyle.signup}>
                Sing In
            </button>
        </form>
    );
}
