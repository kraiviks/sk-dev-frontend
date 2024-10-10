'use client';
import { FC, useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export const ModeToggle: FC = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === 'dark';

	return false;
	return (
		<Button
			className="cursor-pointer select-none"
			variant="ghost"
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
		>
			{isDark ? <Moon size={16} /> : <Sun size={16} className="text-black" />}
		</Button>
	);
};
