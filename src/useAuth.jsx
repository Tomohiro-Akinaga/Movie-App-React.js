import { useState, useEffect } from "react";
import { auth } from "./config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function useAuth() {
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, () => {
            auth.currentUser ? setUser(auth.currentUser) : setUser();
        });
    }, [user]);

    return user;
}
