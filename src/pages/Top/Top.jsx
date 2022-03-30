import Header from "../../components/Header/Header";
import Main from "./Main/Main";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";

function Top() {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {loading && <Loading />}
            <Header />
            <Main setLoading={setLoading} />
            <Footer />
        </>
    );
}

export default Top;
