import type { TaskObject } from "../types";

export function setItem(key: string, value: TaskObject[]) {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.log(error);
	}
}

export function getItem(key: string) {
	try {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : undefined;
	} catch (error) {
		console.log(error);
	}
}
