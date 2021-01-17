import React from "react";

type PropsType = {
    count: number
    maxValue: number
}

function Count(props: PropsType) {
    return (
        <div className={props.count >= props.maxValue ? "maxCount" : ""}>{props.count}</div>
    )
}


export default Count