"use client"

import { ReactNode } from "react";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";


const TelegramWebAppProvider = ({ children } : { children: ReactNode }) => {
    return <WebAppProvider 
        options={{
            smoothButtonsTransition: true,
        }}
    >
        {children}
    </WebAppProvider>
}

export default TelegramWebAppProvider;