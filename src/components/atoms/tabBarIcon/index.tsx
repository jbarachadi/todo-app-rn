import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faCheck,
    faEllipsisH,
    faList,
} from "@fortawesome/free-solid-svg-icons";

interface ITabBarIconComponent {
    icon: string;
    color: string;
}

export const TabBarIcon = ({ icon, color }: ITabBarIconComponent) =>
    icon === "all" ? (
        <FontAwesomeIcon icon={faList} color={color} />
    ) : icon === "active" ? (
        <FontAwesomeIcon icon={faEllipsisH} color={color} />
    ) : icon === "completed" ? (
        <FontAwesomeIcon icon={faCheck} color={color} />
    ) : (
        <FontAwesomeIcon icon={faList} color={color} />
    );
