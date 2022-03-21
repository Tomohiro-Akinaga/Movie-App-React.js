import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FirebaseAuthErrorMessage from "./FirebaseAuthErrorMessage/FirebaseAuthErrorMessage";
import FormStyle from "./SignUpForm.module.scss";

export default function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return null;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
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
            {/* {error && <FirebaseAuthErrorMessage error={error} />} */}
            <input
                type="password"
                value={password}
                className={FormStyle.password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* {error && <FirebaseAuthErrorMessage error={error} />} */}
            <input
                type="password"
                value={confirmPassword}
                className={FormStyle.confirmPassword}
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* {error && <FirebaseAuthErrorMessage error={error} />} */}
            <button type="submit" className={FormStyle.signup}>
                Sing Up
            </button>
        </form>
    );
}
