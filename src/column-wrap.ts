export function columnWrap(input: string, columns: number): string {
  let currentCol = 0;
  let cursor = 0;
  let output = "";
  while (true) {
    const currentChar = input.charAt(cursor++);
    output += currentChar;
    if (cursor >= input.length) {
      break;
    }
    if (currentChar === "\n") {
      currentCol = 0;
    } else if (++currentCol >= columns) {
      output += "\n";
      currentCol = 0;
    }
  }
  return output;
}
