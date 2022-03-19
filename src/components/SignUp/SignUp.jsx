import { mainMovieAPI } from "../../api/mainMovieAPI.js";

export default function SignUp() {
    const json = mainMovieAPI();
    console.log(json.page);

    return <h1>Sign Up</h1>;
}
