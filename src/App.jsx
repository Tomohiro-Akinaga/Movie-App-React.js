import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Top from "./pages/Top/Top";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
    const [loginUser, setLoginUser] = useState();
    const [loading, setLoading] = useState(true);

    function RequireAuth({ children }) {
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLoginUser(user);
                    setLoading(false);
                } else {
                    setLoading(true);
                }
            });
        }, []);
        return children;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/top" element={<Top />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Top loading={loading} loginUser={loginUser} />
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
