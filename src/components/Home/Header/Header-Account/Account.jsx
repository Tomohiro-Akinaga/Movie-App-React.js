import AccountStyle from "./Account.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import AccountInformation from "./Information/AccountInformation";

export default function Account() {
    const [accountInfo, setAccountInfo] = useState(false);

    return (
        <div className={AccountStyle.container}>
            <button
                className={AccountStyle.accountButton}
                type="button"
                onClick={() => setAccountInfo(!accountInfo)}
            >
                <FontAwesomeIcon
                    icon={faCircleUser}
                    className={AccountStyle.buttonIcon}
                />
            </button>
            {accountInfo && <AccountInformation />}
        </div>
    );
}
