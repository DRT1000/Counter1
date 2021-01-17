import React from "react";

type PropsType = {
    reset: () => void
    count: number
    minValue: number
}

function Reset(props: PropsType) {
    return (
        <button disabled={props.count === props.minValue}
                onClick={() => props.reset()}>Reset</button>
    )
}


export default Reset