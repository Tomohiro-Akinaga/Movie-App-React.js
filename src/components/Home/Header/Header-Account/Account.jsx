import AccountStyle from "./Account.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
    return (
        <button className={AccountStyle.accountButton} type="button">
            <FontAwesomeIcon
                icon={faCircleUser}
                className={AccountStyle.buttonIcon}
            />
        </button>
    );
}
