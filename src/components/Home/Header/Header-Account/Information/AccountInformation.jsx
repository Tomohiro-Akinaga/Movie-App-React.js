import InformationStyle from "./Information.module.scss";

export default function AccountInformation() {
    return (
        <ul className={InformationStyle.container}>
            <div className={InformationStyle.user}>
                <h3 className={InformationStyle.heading}>Login User</h3>
                <p className={InformationStyle.email}>test@gmail.com</p>
            </div>
            <ul className={InformationStyle.list}>
                <li className={InformationStyle.item}>Favorite Movie</li>
                <li className={InformationStyle.item}>Sign Out</li>
            </ul>
        </ul>
    );
}
