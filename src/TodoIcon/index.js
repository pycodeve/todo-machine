import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import "./TodoIcon.css";

const iconTypes = {
    check: <FaCheck />,
    delete: <FaRegTrashAlt />,
};

function TodoIcon ({ type, classIcon, onClick }) {
    return (
        <span className={`Icon icon-${type} ${classIcon}`} onClick={onClick}>
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };