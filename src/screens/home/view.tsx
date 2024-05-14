'use client'

import './styles.css';
import { PageLayout } from '@/src/shared/ui';
import { AboutUser } from '@/src/widgets/about-user';
import { useExpand } from '@vkruglikov/react-telegram-web-app';
import { useEffect } from 'react';

export const HomePage = () => {
	const [isExpanded, expand] = useExpand();

	useEffect(expand, []);

	return (
		<PageLayout className={'home-gradient'}>
			<AboutUser />
		</PageLayout>
	);
};
