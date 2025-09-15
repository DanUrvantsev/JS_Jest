const sorting = require("../../app");

describe("Books names test suit", () => {
	it("Books names should be sorted in ascending order", () => {
		const input = [
			"Гарри Поттер",
			"Властелин Колец",
			"Волшебник изумрудного города",
		];

		const expected = [
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
		];
		const output = sorting.sortByName(input);

		expect(output).toEqual(expected);
	});

	it("Book titles should not be sorted", () => {
		const input = [
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
		];

		const expected = [
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
		];
		const output = sorting.sortByName(input);

		expect(output).toEqual(expected);
	});

  it("Book titles should be sorted in descending order", () => {
		const input = [
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
		];

		const expected = [
			"Властелин Колец",
			"Волшебник изумрудного города",
			"Гарри Поттер",
		];
		const output = sorting.sortByName(input);

		expect(output).toEqual(expected);
	});
  it("The book titles are the same", () => {
		const input = [
			"Властелин Колец",
			"Властелин Колец",
			"Властелин Колец",
		];

		const expected = [
			"Властелин Колец",
			"Властелин Колец",
			"Властелин Колец",
		];
		const output = sorting.sortByName(input);

		expect(output).toEqual(expected);
	});
});