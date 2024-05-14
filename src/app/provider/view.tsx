'use client'

import { FC } from "react";
import ReduxProvider from "./redux-provider";
import TonConnectProvider from "./tonconnect-provider";
import TelegramWebAppProvider from "./telegram-provider";

type Props = {
	children: React.ReactNode;
};

export const Provider: FC<Props> = ({ children }) => {
	return (
		<ReduxProvider>
			<TonConnectProvider>
                <TelegramWebAppProvider>
				    {children}
                </TelegramWebAppProvider>
			</TonConnectProvider>
		</ReduxProvider>
	);
};