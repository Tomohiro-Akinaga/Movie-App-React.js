import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />}></Route>
                <Route path="mylist" element={<MyList />}></Route>
                <Route path="signin" element={<SignIn />}></Route> */}
                <Route path="signup" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
