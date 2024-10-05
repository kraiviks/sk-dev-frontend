import { Nunito } from 'next/font/google';

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});


export const fonts = {
	nunito,
};
