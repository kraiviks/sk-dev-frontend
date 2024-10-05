import { cn } from '@/lib/utils';

interface Props {
	className?: string;
	image?: string;
	type: string;
	rating: number;
	title: string;
}

export const Card: React.FC<Props> = ({
	className,
	image,
	type,
	rating,
	title,
}) => {
	return (
		<div className={cn('flex flex-col cursor-pointer select-none', className)} title={title}>
			<div className="w-[145px] h-[215px] bg-white flex justify-center items-center text-black">
				Image
			</div>
			<div className="flex flex-col mt-1">
				<div className="flex gap-2 text-xs text-gray-400">
					<p>{type}</p>
					<p>{rating} ★</p>
				</div>
				<div>
					<h4 className="text-sm">{title}</h4>
				</div>
			</div>
		</div>
	);
};
