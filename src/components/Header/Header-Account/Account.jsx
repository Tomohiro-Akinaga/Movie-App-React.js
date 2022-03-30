import styles from "./Account.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import AccountInformation from "./Information/AccountInformation";

export default function Account() {
    const [accountInfo, setAccountInfo] = useState(false);
    return (
        <div className={styles.container}>
            <button
                className={styles.accountButton}
                type="button"
                onClick={() => setAccountInfo(!accountInfo)}
            >
                <FontAwesomeIcon
                    icon={faCircleUser}
                    className={styles.buttonIcon}
                />
            </button>
            {accountInfo && <AccountInformation />}
        </div>
    );
}
