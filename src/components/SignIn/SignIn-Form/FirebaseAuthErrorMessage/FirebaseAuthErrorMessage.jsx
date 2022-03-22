import MessageStyle from "./Message.module.scss";
import PropTypes from "prop-types";

function FirebaseAuthErrorMessage({ formError }) {
    return <p className={MessageStyle.message}>{formError}</p>;
}

FirebaseAuthErrorMessage.propTypes = {
    formError: PropTypes.string,
};

export default FirebaseAuthErrorMessage;
