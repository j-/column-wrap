function breakLine(input: string, columns: number): [string, string] {
  let cursor: number;
  let currentChar: string;

  const setCursor = (i: number) => (currentChar = input.charAt((cursor = i)));

  const cursorIsAtWhitespace = () => /\s/.test(currentChar);
  const cursorIsAtEnd = () => cursor >= input.length;

  const advanceCursorToNextNonWhitespace = () => {
    const search = /\S/.exec(input.substring(cursor));
    if (search === null) {
      return;
    }
    setCursor(cursor + search.index);
  };

  const reverseCursorToLastNonWord = () => {
    const search = /(?:\w+(?!\w))+$/.exec(input.substring(0, cursor));
    if (search === null || search.index === 0) {
      return;
    }
    setCursor(search.index);
  };

  setCursor(columns);

  if (cursorIsAtWhitespace()) {
    advanceCursorToNextNonWhitespace();
  } else if (!cursorIsAtEnd()) {
    reverseCursorToLastNonWord();
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
