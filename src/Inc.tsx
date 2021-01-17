import React from "react";

type PropsType = {
    incr: () => void
    count: number
    maxValue: number
}

function Inc(props: PropsType) {
    return (
        <button disabled={props.count >= props.maxValue}
                onClick={() => props.incr()}>Inc</button>
    );
}


export default Inc