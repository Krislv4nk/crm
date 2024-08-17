import React from "react";


export interface ServerComponentProps {
    children?: React.ReactNode;
}

export default function ServerComponent({children}: ServerComponentProps) {
    console.log('ServerComponent')
    return (
        <div>
            <span>ServerComponent</span>
            {children}
        </div>
    )
}