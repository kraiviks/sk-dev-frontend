'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// Створюємо контекст
const AnimationContext = createContext<any>(null);

// Провайдер контексту
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	// Функція для зміни активного класу
	const triggerActiveClass = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<AnimationContext.Provider value={{ activeIndex, triggerActiveClass }}>
			{children}
		</AnimationContext.Provider>
	);
};

// Хук для використання контексту
export const useAnimation = () => useContext(AnimationContext);
