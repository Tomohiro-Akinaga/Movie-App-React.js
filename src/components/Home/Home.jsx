import { useNavigate } from "react-router";
import { auth } from "../../config/firebase-config";
import { signOut } from "firebase/auth";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        signOut(auth).then(() => {
            navigate("signup");
        });
    };

    return <button onClick={handleClick}>SignOut</button>;
}
