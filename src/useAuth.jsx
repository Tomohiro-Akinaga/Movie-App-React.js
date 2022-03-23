import { auth } from "./config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export default function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => setCurrentUser(user));
    }, []);

    return currentUser;
}
