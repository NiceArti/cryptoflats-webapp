import { imageLoader } from '@/src/shared/utils';
import Image from 'next/image';

export const Avatar = () => {
	return (
		<div className={'size-14 rounded-full overflow-hidden relative'}>
			<Image
				src='/images/avatar.png'
				alt={'User Avatar'}
				objectFit='cover'
				width={60}
				height={60}
				// quality={100}
				loader={imageLoader}
			/>
		</div>
	);
};
