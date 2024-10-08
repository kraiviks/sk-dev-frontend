/* eslint-disable @next/next/no-img-element */
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SKILLS } from '@/data';
import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';
import {
	BriefcaseIcon,
	DownloadIcon,
	LinkedinIcon,
	MailIcon,
	MapPinIcon,
} from 'lucide-react';
import Link from 'next/link';

export const Profile = ({ className }: { className?: string }) => {
	const allSkills = [
		...SKILLS.frontend,
		...SKILLS.backend,
		...SKILLS.mobile,
		...SKILLS.tools,
	];
	return (
		<motion.div
			className={cn(
				'relative flex flex-col items-center border-4 border-white shadow-brand shadow-lg rounded-tl-[100px] rounded-br-[100px] py-9 px-6 min-w-[300px] max-w-[300px]',
				className
			)}
			whileInView={{
				opacity: [0, 1],
				x: [-50, 0],
				y: [300, 0],
				scale: [0.5, 1],
			}}
			viewport={{ once: true }}
			transition={{ type: 'spring', stiffness: 50, damping: 10, duration: 2 }}
		>
			<motion.div
				className="absolute top-0 left-0 w-[calc(100%+8px)] h-[calc(100%+8px)] border-l-4 border-t-4 border-brand rounded-tl-[110px] -translate-x-2 -translate-y-2 z-[-1]"
				initial={{
					opacity: 0,
					y: -100,
					x: -100,
					height: 0,
				}}
				animate={{
					opacity: 1,
					y: '-0.5rem',
					x: '-0.5rem',
					height: 'calc(100% + 8px)',
					width: 'calc(100% + 8px)',
				}}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 10,
					delay: 0.2,
				}}
			/>
			<div className="flex w-[96px] h-[96px] border-brand border-2 rounded-full overflow-hidden">
				<img
					className="object-cover w-full h-full"
					src="https://avatars.githubusercontent.com/u/32710409?v=4"
					alt="avatar"
				/>
			</div>
			<h2 className="mb-0">Serhii Kostiv</h2>
			<div className="text-sm">Frontend Developer</div>
			<ul className="w-full mt-8 space-y-3">
				<li className="flex items-center gap-3 text-sm">
					<MailIcon size={16} className="text-brand" />{' '}
					<Link href="mailto:kostiv.serhii@gmail.com">
						kostiv.serhii@gmail.com
					</Link>
				</li>
				<li className="flex items-center gap-3 text-sm">
					<MapPinIcon size={16} className="text-brand" /> Ukraine
				</li>
				<li className="flex items-center gap-3 text-sm">
					<BriefcaseIcon size={16} className="text-brand" /> Full-time
				</li>
				<li className="flex items-center gap-3 text-sm">
					<LinkedinIcon size={16} className="text-brand" />{' '}
					<Link
						href="https://www.linkedin.com/in/serhii-kostiv/"
						target="_blank"
					>
						serhii-kostiv
					</Link>
				</li>
			</ul>
			<div className="flex flex-wrap gap-2 mt-4">
				{allSkills.map((skill) => (
					<Badge key={skill.name} className="bg-brand hover:text-white">
						{skill.name}
					</Badge>
				))}
			</div>
			<Button
				variant="default"
				className="mt-8 bg-white rounded-full hover:bg-gray-300"
			>
				<Link
					className="flex items-center gap-2"
					href="https://drive.usercontent.google.com/u/0/uc?id=1xk94rsR53mMsuzc-bBDpiAaJFuUvpaVA&export=download"
				>
					Download CV <DownloadIcon size={16} />
				</Link>
			</Button>
		</motion.div>
	);
};
