import { columnWrap } from "./column-wrap";

it("is a function", () => {
  expect(typeof columnWrap).toBe("function");
});

it("handles an empty string", () => {
  expect(columnWrap("", 80)).toBe("");
});

it('wraps "ABCDEF" at 1 col', () => {
  const columns = 1;
  const input = "ABCDEF";
  const expected = "A\nB\nC\nD\nE\nF";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "ABCDEF" at 2 cols', () => {
  const columns = 2;
  const input = "ABCDEF";
  const expected = "AB\nCD\nEF";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "ABCDEF" at 3 cols', () => {
  const columns = 3;
  const input = "ABCDEF";
  const expected = "ABC\nDEF";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "ABCDEF" at 4 cols', () => {
  const columns = 4;
  const input = "ABCDEF";
  const expected = "ABCD\nEF";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "ABCDEF" at 6 cols', () => {
  const columns = 6;
  const input = "ABCDEF";
  const expected = "ABCDEF";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "AAA\\nBBB" at 2 cols', () => {
  const columns = 2;
  const input = "AAA\nBBB";
  const expected = "AA\nA\nBB\nB";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});
