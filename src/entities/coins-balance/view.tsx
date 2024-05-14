import Image from 'next/image';

export const CoinsBalance = () => {
	return (
		<div className={'inline-flex items-center gap-2.5'}>
			<span className={'inline-block text-[2rem] font-bold'}>0</span>
			<span className={'inline-block size-8'}>
				<Image
					src='/images/cflat-coin.png'
					alt={'Cflat Coin'}
					width={35}
					height={35}
					quality={100}
				/>
			</span>
		</div>
	);
};
