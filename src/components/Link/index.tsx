import React from 'react'
import {Route} from "types/index"

const Index: React.FC<Route> = (props) => {
    function bindOnClick() {
        props.setRoute(props.path)
    }
    return (
        <div>
            <div onClick={bindOnClick}>{props.children}</div>
        </div>
    )
};

export default Index;