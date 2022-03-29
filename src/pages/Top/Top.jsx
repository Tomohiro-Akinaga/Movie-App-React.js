import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Main from "./Main/Main";
import Footer from "../../components/Footer/Footer";

function Top({ loading, loginUser }) {
    return (
        <>
            {loading && <Loading />}
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default Top;
