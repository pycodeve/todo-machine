import React from "react";
import { TodoIcon } from ".";

function CompleteIcon({complete, onComplete}) {
    return (
        <TodoIcon type="check" classIcon={complete?'Icon-check-active':''} className="Icon-check--active" onClick={onComplete} />
    )
};

export { CompleteIcon };