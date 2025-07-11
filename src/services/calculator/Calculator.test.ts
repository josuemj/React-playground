import { expect, test } from "vitest";
import { Calculator } from "./Calculator.ts";

const calc = new Calculator();

test("Calculator sum method", () => {
  const result = calc.sum([10]);
  expect(result).toBe(10);
});

test("Calculator subtract method", () => {
  const result = calc.subtract([10, 5]);
  expect(result).toBe(5);
});

test("Calculator multiply method", () => {
  const result = calc.multiply([10, 5]);
  expect(result).toBe(50);
});

test("Calculator divide method", () => {
  const result = calc.divide([10, 5]);
  expect(result).toBe(2);
});

test("Calculator average method", () => {
  const result = calc.average([10, 20, 30]);
  expect(result).toBe(20);
});

test("Calculator max method", () => {
  const result = calc.max([10, 20, 30]);
  expect(result).toBe(30);
});
