const NEXT_WHITESPACE = /\s/;
const NEXT_NON_WHITESPACE = /\S/;
const LAST_NON_WHITESPACE = /\S+$/;

function breakLine(input: string, columns: number): [string, string] {
  let cursor = columns;

  // If cursor is at whitespace
  if (NEXT_WHITESPACE.test(input.charAt(cursor))) {
    // Advance cursor to next non-whitespace character
    const search = NEXT_NON_WHITESPACE.exec(input.substring(cursor));
    if (search !== null) {
      cursor = cursor + search.index;
    }
    // Cursor is not at end
  } else if (cursor < input.length) {
    // Reverse cursor to last non-whitespace character
    const search = LAST_NON_WHITESPACE.exec(input.substring(0, cursor));
    if (search !== null && search.index !== 0) {
      cursor = search.index;
    }
  }

  return [input.substring(0, cursor), input.substring(cursor)];
}

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

export function columnWrap(input: string, columns: number): string {
  return input
    .split(/\n/g)
    .map(line => wrapLine(line, columns))
    .join("\n");
}
