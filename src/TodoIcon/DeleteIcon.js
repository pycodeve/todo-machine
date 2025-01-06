import React from "react";
import { TodoIcon } from ".";

function DeleteIcon({ onDelete }){
    return (
        <TodoIcon type="delete" classIcon="Icon--delete" onClick={onDelete} />
    )
};

export { DeleteIcon };