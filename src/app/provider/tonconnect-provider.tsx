"use client"

import { ReactNode } from "react";
import { TonConnectUIProvider } from '@tonconnect/ui-react';


const TonConnectProvider = ({ children } : { children: ReactNode }) => {
    return <TonConnectUIProvider manifestUrl={process.env.NEXT_PUBLIC_TONCONNECT_MANIFEST}>
    {children}
</TonConnectUIProvider>
}

export default TonConnectProvider;