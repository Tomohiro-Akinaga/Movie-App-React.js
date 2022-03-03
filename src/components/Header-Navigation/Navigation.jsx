import NavigationStyle from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";

function Navigation() {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }
    // const listsStatus = lists ? "is-active" : "";

    return (
        <nav className={NavigationStyle.navigation}>
            <div className={NavigationStyle.genreContainer} onClick={handleClick}>
                <h2 className={NavigationStyle.genreHeading}>Genre</h2>
                <FontAwesomeIcon icon={faCaretDown} className={NavigationStyle.caretDown}/>
            </div>
            <ul className={`${NavigationStyle.lists } ${active ? NavigationStyle.isActive : ""}`}>
                <li className={`${NavigationStyle.list} ${NavigationStyle.active}`} >Home</li>
                <li className={NavigationStyle.list}>TV Shows</li>
                <li className={NavigationStyle.list}>Movies</li>
                <li className={NavigationStyle.list}>New &amp; Popular</li>
            </ul>
        </nav>
    )
}

export default Navigation;