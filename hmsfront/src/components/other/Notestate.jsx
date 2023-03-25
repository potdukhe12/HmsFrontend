import React from "react";

import { Notecontext } from "./Notecontext";

export const Notestate = (props) => {

    const state = {
        name: "Atharv"
    }

    return (
        <Notecontext.Provider value={state}>
            {props.children}
        </Notecontext.Provider>
    )

}