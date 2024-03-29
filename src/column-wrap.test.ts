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

it('wraps "A\\s\\s\\sB" at 2 cols', () => {
  const columns = 2;
  const input = "A   B";
  const expected = "A   \nB";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 1 cols', () => {
  const columns = 1;
  const input = "Hello world";
  const expected = "H\ne\nl\nl\no \nw\no\nr\nl\nd";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 2 cols', () => {
  const columns = 2;
  const input = "Hello world";
  const expected = "He\nll\no \nwo\nrl\nd";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 3 cols', () => {
  const columns = 3;
  const input = "Hello world";
  const expected = "Hel\nlo \nwor\nld";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 4 cols', () => {
  const columns = 4;
  const input = "Hello world";
  const expected = "Hell\no \nworl\nd";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 5 cols', () => {
  const columns = 5;
  const input = "Hello world";
  const expected = "Hello \nworld";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 6 cols', () => {
  const columns = 6;
  const input = "Hello world";
  const expected = "Hello \nworld";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 7 cols', () => {
  const columns = 7;
  const input = "Hello world";
  const expected = "Hello \nworld";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 8 cols', () => {
  const columns = 8;
  const input = "Hello world";
  const expected = "Hello \nworld";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 9 cols', () => {
  const columns = 9;
  const input = "Hello world";
  const expected = "Hello \nworld";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 10 cols', () => {
  const columns = 10;
  const input = "Hello world";
  const expected = "Hello \nworld";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 11 cols', () => {
  const columns = 11;
  const input = "Hello world";
  const expected = "Hello world";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello world" at 12 cols', () => {
  const columns = 12;
  const input = "Hello world";
  const expected = "Hello world";
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});

it('wraps "Hello \\"world\\"" at 7 cols', () => {
  const columns = 7;
  const input = 'Hello "world"';
  const expected = 'Hello \n"world"';
  const actual = columnWrap(input, columns);
  expect(actual).toBe(expected);
});
