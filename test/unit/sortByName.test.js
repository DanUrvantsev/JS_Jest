const sorting = require("../../app");

describe("Books names test suit", () => {
  test("Books names should be sorted in ascending order", () => {
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

  test("Should sort reverse order", () => {
    const input = [
      "Гарри Поттер",
      "Волшебник изумрудного города",
      "Властелин Колец",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  test("Should handle equal names", () => {
    const input = [
      "Гарри Поттер",
      "гарри поттер",
    ];
    const expected = [
      "Гарри Поттер",
      "гарри поттер",
    ];
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  test("Should handle mixed case names", () => {
    const input = [
      "Властелин Колец",
      "волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const expected = [
      "Властелин Колец",
      "Гарри Поттер",
      "волшебник изумрудного города",
    ];
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});