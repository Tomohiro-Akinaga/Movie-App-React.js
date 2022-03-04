import AppStyle from "./App.module.scss";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

/* Firebase */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/* Firebase */
const firebaseConfig = {
    apiKey: "AIzaSyAwCDWhZpSWS1AHdverMYW_zcHsIOToTR4",
    authDomain: "netflix-clone-react-app-2baad.firebaseapp.com",
    projectId: "netflix-clone-react-app-2baad",
    storageBucket: "netflix-clone-react-app-2baad.appspot.com",
    messagingSenderId: "1009751770558",
    appId: "1:1009751770558:web:91294d85443ef94c18a5ef",
    measurementId: "G-K7JNJCMW6K",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/* App component */
function App() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

export default App;
