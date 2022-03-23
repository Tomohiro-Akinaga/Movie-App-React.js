import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import useAuth from "./useAuth";

function App() {
    const user = useAuth();

    const RequireAuth = ({ children }) => {
        if (!user) {
            return <Navigate to="signin" />;
        }
        return children;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="signin" element={<SignIn />}></Route>
                <Route path="signup" element={<SignUp />}></Route>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
