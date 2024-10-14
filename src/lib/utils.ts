import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function setLocalStorage(key: string, value: unknown): void {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error('Error setting localStorage', error);
	}
}

export function getLocalStorage<T>(key: string): T | null {
	try {
		const value = localStorage.getItem(key);
		if (value) {
			return JSON.parse(value) as T;
		}
		return null;
	} catch (error) {
		console.error('Error getting localStorage', error);
		return null;
	}
}

export function removeLocalStorage(key: string): void {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.error('Error removing localStorage', error);
	}
}

export function formatDate(dateString: string) {
	dayjs.extend(utc);
	dayjs.extend(timezone);
	return dayjs(dateString).tz('Europe/Kiev').format('YYYY-MM-DD HH:mm');
}

export function getRandom(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

export const calculatePosition = (
	index: number,
	itemsCount: number,
	radius: number
) => {
	// Shift the angle by -90 degrees so that the first element is at the top
	const angle = (index / itemsCount) * 2 * Math.PI - Math.PI / 2;
	const x = radius * Math.cos(angle); // Calculate the x position
	const y = radius * Math.sin(angle); // Calculate the y position

	const roundToTwoDecimal = (num: number) => Math.round(num * 100) / 100;

	return {
		x: roundToTwoDecimal(x),
		y: roundToTwoDecimal(y),
	};
};