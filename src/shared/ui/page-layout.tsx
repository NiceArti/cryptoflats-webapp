import { clsx } from 'clsx';

type Props = {
	className?: string;
	children?: React.ReactNode;
};

/**
 * Page layout component
 * @param children - The children to render
 * @param className - The class name to apply
 * @returns The page layout component
 */
export const PageLayout: React.FC<Props> = ({ children, className }) => {
	return (
		<main
			className={clsx(
				'max-h-[1000px] h-full w-full max-w-md mx-auto overflow-hidden flex flex-col relative p-4 py-5',
				className
			)}
		>
			<div className={'relative z-10'}>{children}</div>
		</main>
	);
};
