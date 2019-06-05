const NEXT_WHITESPACE = /\s/;
const NEXT_NON_WHITESPACE = /\S/;
const LAST_NON_WHITESPACE = /\S+$/;

function breakLine(input: string, columns: number): [string, string] {
  let cursor = columns;

  const cursorIsAtWhitespace = () => NEXT_WHITESPACE.test(input.charAt(cursor));
  const cursorIsAtEnd = () => cursor >= input.length;

  const advanceCursorToNextNonWhitespace = () => {
    const search = NEXT_NON_WHITESPACE.exec(input.substring(cursor));
    if (search === null) {
      return;
    }
    cursor = cursor + search.index;
  };

  const reverseCursorToLastNonWhitespace = () => {
    const search = LAST_NON_WHITESPACE.exec(input.substring(0, cursor));
    if (search === null || search.index === 0) {
      return;
    }
    cursor = search.index;
  };

  if (cursorIsAtWhitespace()) {
    advanceCursorToNextNonWhitespace();
  } else if (!cursorIsAtEnd()) {
    reverseCursorToLastNonWhitespace();
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
