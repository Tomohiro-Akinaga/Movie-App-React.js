import MessageStyle from "./Message.module.scss";
import helperErrorMessage from "./helperErrorMessage";
import PropTypes from "prop-types";

function FirebaseAuthErrorMessage({ error }) {
    console.log(error);
    let message = helperErrorMessage(error);
    return <p className={MessageStyle.message}>{message}</p>;
}

FirebaseAuthErrorMessage.propTypes = {
    error: PropTypes.string,
};

export default FirebaseAuthErrorMessage;
