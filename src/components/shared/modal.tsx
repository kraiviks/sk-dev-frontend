import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export type ModalProps = {
	title: string;
	desctiption: string;
	children: React.ReactNode;
	buttonText?: string;
	buttonVariant?:
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link'
		| null
		| undefined;
	buttonClassName?: string;
	icon?: React.ReactNode;
};

export const Modal = ({
	title,
	desctiption,
	children,
	buttonText = 'Open modal',
	buttonVariant = 'default',
	buttonClassName,
	icon,
}: ModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				{icon ? (
					<button
						className={cn(
							'cursor-pointer w-max hover:text-red-500',
							buttonClassName
						)}
					>
						{icon}
					</button>
				) : (
					<Button className={buttonClassName} variant={buttonVariant}>
						{buttonText}
					</Button>
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{desctiption}</DialogDescription>
				</DialogHeader>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	);
};
