const NEXT_WHITESPACE = /\s/;
const NEXT_NON_WHITESPACE = /\S/;
const LAST_NON_WHITESPACE = /\S+$/;

/**
 * Breaks a line once at the given number of columns, returning two strings
 * corresponding to the characters before the break and after the break
 * respectively. If the line does not exceed the given number of columns then
 * the second string returned will be empty.
 *
 * @param input Line of text to break. Should not contain a LF.
 * @param columns Number of columns to break the text at.
 */
function breakLine(input: string, columns: number): [string, string] {
  let cursor = columns;

  if (NEXT_WHITESPACE.test(input.charAt(cursor))) {
    // If cursor is at whitespace
    // Advance cursor to next non-whitespace character
    const search = NEXT_NON_WHITESPACE.exec(input.substring(cursor));
    if (search !== null && search.index !== 0) {
      cursor = cursor + search.index;
    }
  } else if (cursor < input.length) {
    // If cursor is not at end
    // Reverse cursor to last non-whitespace character
    const search = LAST_NON_WHITESPACE.exec(input.substring(0, cursor));
    if (search !== null && search.index !== 0) {
      cursor = search.index;
    }
  }

  return [input.substring(0, cursor), input.substring(cursor)];
}

/**
 * Wraps a line at the given number of columns as many times as necessary.
 *
 * @param input Line of text to wrap. Should not contain a LF.
 * @param columns Number of columns to wrap the text at.
 */
function wrapLine(input: string, columns: number): string {
  let output = "";
  while (true) {
    const [before, after] = breakLine(input, columns);
    output += before;
    if (after === "") {
      break;
    } else {
      output += "\n";
      input = after;
    }
  }
  return output;
}

/**
 * Wrap a body of text at the given number of columns. Inserts new line
 * characters so that the text does not exceed the number of columns.
 *
 * @param input Body of text to wrap.
 * @param columns Number of columns to wrap the text at.
 */
export function columnWrap(input: string, columns: number): string {
  return input
    .split(/\n/g)
    .map(line => wrapLine(line, columns))
    .join("\n");
}
