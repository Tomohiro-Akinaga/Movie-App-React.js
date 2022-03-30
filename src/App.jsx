import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./pages/Top/Top";
import SearchResult from "./pages/SearchResult/SearchResult";
import Detailed from "./pages/Detailed/Detailed";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="search-result" element={<SearchResult />} />
                <Route path="detailed" element={<Detailed />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
