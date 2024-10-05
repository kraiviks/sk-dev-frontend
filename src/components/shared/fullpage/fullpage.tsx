'use client';
import ReactDOMServer from 'react-dom/server';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './fullpage.css';

import { Mousewheel, Pagination } from 'swiper/modules';
import {
	LayoutGridIcon,
	UserIcon,
	CodeIcon,
	MailIcon,
	EditIcon,
	ComputerIcon,
	BookHeartIcon
} from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { useAnimation } from '@/contexts/AnimationContext';

export const Fullpage = ({
	sections,
}: {
	sections: Array<React.ReactNode>;
}) => {
	const [disabledFullPage, setDisabledFullPage] = useState<boolean>(false);
	const { triggerActiveClass } = useAnimation();
	const windowSize = useWindowSize();

	const renderPaginationIcon = (
		icon: React.ReactNode,
		title: string,
		className: string
	) => {
		return `<div class="${className}" title="${title}">${ReactDOMServer.renderToString(
			icon
		)}</div>`;
	};

	useEffect(() => {
		const isDesktop = windowSize.width >= 1090 && windowSize.height >= 720;
		setDisabledFullPage(isDesktop);
	}, [windowSize, disabledFullPage]);


	return !disabledFullPage ? (
		<div className="flex flex-col">
			{sections.map((section, index) => (
				<Fragment key={index}>{section}</Fragment>
			))}
		</div>
	) : (
		<Swiper
			simulateTouch={false}
			direction={'vertical'}
			slidesPerView={1}
			speed={1000}
			mousewheel={true}
			onSlideChange={(swiper) => triggerActiveClass(swiper.activeIndex)}
			pagination={{
				clickable: true,
				renderBullet: function (index, className) {
					switch (index) {
						case 0:
							return renderPaginationIcon(
								<LayoutGridIcon />,
								'Main',
								className
							);
						case 1:
							return renderPaginationIcon(<UserIcon />, 'About me', className);
						case 2:
							return renderPaginationIcon(<CodeIcon />, 'Skills', className);
						case 3:
							return renderPaginationIcon(<ComputerIcon />, 'Works', className);
						case 4:
							return renderPaginationIcon(<BookHeartIcon />, 'Pet Projects', className);
						case 5:
							return renderPaginationIcon(<EditIcon />, 'Blog', className);
						case 6:
							return renderPaginationIcon(<MailIcon />, 'Contact', className);
						default:
							return '';
					}
				},
			}}
			modules={[Mousewheel, Pagination]}
			className="fullpage-slider"
		>
			{sections.map((section, index) => (
				<SwiperSlide key={index}>{section}</SwiperSlide>
			))}
		</Swiper>
	);
};
