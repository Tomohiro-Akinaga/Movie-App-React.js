import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import Detailed from "./components/Detailed/Detailed";
import useAuth from "./useAuth";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
    const user = useAuth();

    // const RequireAuth = ({ children }) => {
    //     if (!user) {
    //         return <Navigate to="signin" />;
    //     }
    //     return children;
    // };

    const [movieID, setMovieID] = useState();
    const [searchKeyword, setSearchKeyword] = useState();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            setMovieID={setMovieID}
                            searchKeyword={searchKeyword}
                            setSearchKeyword={setSearchKeyword}
                        />
                    }
                ></Route>
                <Route path="signin" element={<SignIn />}></Route>
                <Route path="signup" element={<SignUp />}></Route>
                <Route
                    path="detailed"
                    element={<Detailed movieID={movieID} />}
                ></Route>

                {/* <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Home user={user} />
                        </RequireAuth>
                    }
                ></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
