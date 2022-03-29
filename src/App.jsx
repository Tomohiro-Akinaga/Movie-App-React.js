import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    useNavigate,
    useLocation,
    useHistory,
} from "react-router-dom";
import { useState } from "react";
import Top from "./pages/Top/Top";
import Detailed from "./pages/Detailed/Detailed";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
    const [movieID, setMovieID] = useState();
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="myapps" element={<Navigate to="/learn" />} />
                <Route path="learn" element={<Learn />}>
                    <Route path="courses" element={<Courses />}>
                        <Route path=":courseid" element={<CourseId />} />
                    </Route>
                    <Route path="bundles" element={<Bundles />} />
                </Route> */}
                <Route path="/" element={<Top setMovieID={setMovieID} />} />
                <Route path="/detailed" element={<Detailed />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                {/* <Route path="dashbord" element={<Dashbord />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

// function Home() {
//     return (
//         <div>
//             <h1>Home route</h1>
//         </div>
//     );
// }
// function Learn() {
//     return (
//         <div>
//             <h1>Learn</h1>
//             <h4>All courses are listed here</h4>
//             <Link to="/learn/courses">courses</Link>
//             <Link to="/learn/bundles">bundle</Link>
//             <Outlet />
//         </div>
//     );
// }

// function Courses() {
//     const courseList = ["React", "Angular", "Vue", "Node.js"];
//     const randomCourstList =
//         courseList[Math.floor(Math.random() * courseList.length)];

//     return (
//         <div>
//             <h1>Courses list</h1>
//             <h4>Courses card</h4>

//             <p>More Test</p>
//             <Link to={`/learn/courses/${randomCourstList}`}>
//                 {randomCourstList}
//             </Link>
//             <Outlet />
//         </div>
//     );
// }
// function Bundles() {
//     return (
//         <div>
//             <h1>Bundles list</h1>
//             <h4>Bundles card</h4>
//         </div>
//     );
// }
// function CourseId() {
//     const navigate = useNavigate();
//     const { courseid } = useParams();
//     return (
//         <div>
//             <h1>URL Params is :{courseid}</h1>
//             <button
//                 onClick={() => {
//                     navigate("/dashbord", { state: courseid });
//                 }}
//             >
//                 Price
//             </button>
//         </div>
//     );
// }

// function Dashbord() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     return (
//         <div>
//             <h1>Info that i got here is {location.state}</h1>
//             <button
//                 onClick={() => {
//                     navigate(-1);
//                 }}
//             >
//                 Go Back
//             </button>
//         </div>
//     );
// }
export default App;
