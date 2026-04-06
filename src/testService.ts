import "@tanstack/react-start/server-only";

export class TestService {
	async getTest() {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/todos/1",
		);
		const data = await response.json();

		return data;
	}
}
