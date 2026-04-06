import { createServerFn } from "@tanstack/react-start";

export const getTest = createServerFn().handler(async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/todos/1",
	);
	const data = await response.json();
	return data;
});
