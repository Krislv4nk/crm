'use client';

import React from "react";
import ServerComponentCopy from "./server-comonent-copy";

export interface ClientComponentProps {
    children?: React.ReactNode;
}

export default function ClientComponent({children}: ClientComponentProps) {
    console.log('ServerComponent')
    return (
        <div>
            <span>ClientComponent</span>
            <ServerComponentCopy/>
            {children}
        </div>
    )
}