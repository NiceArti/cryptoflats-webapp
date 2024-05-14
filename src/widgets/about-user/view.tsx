import { Avatar } from '@/src/entities/avatar';
import { CoinsBalance } from '@/src/entities/coins-balance';

export const AboutUser = () => {
	return (
		<div className={'flex flex-col pt-2.5'}>
			<div className={'flex items-center justify-between'}>
				<Avatar />
				<CoinsBalance />
			</div>
		</div>
	);
};
