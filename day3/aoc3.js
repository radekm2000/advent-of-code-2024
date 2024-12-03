import * as fs from "fs";

const data = fs.readFileSync("input.txt", "utf-8");
const pattern = /mul\((\d{1,3}),\s*(\d{1,3})\)|do\(\)|don't\(\)/g;

const parseCorruptedMemory = (input) => {
  let mulEnabled = true;
  let total = 0;

  let match;

  while ((match = pattern.exec(data)) !== null) {
    if (match[0] === "do()") {
      mulEnabled = true;
    } else if (match[0] === "don't()") {
      mulEnabled = false;
    } else if (mulEnabled && match[1] !== undefined && match[2] !== undefined) {
      const a = parseInt(match[1], 10);
      const b = parseInt(match[2], 10);

      total += a * b;
    }
  }

  return total;
};

const total = parseCorruptedMemory(data);
