import React from "react";


export interface ServerComponentCopyProps {
    children?: React.ReactNode;
}

export default function ServerComponentCopy({children}: ServerComponentCopyProps) {
    console.log('ServerComponentCopy')
    return (
        <div>
            <span>ServerComponentCopy</span>
            {children}
        </div>
    )
}