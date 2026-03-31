import { expect, test } from "vitest";
import { BookOwnerListSchema } from "./types";
import sample_response from "./sample_response.json";

test("BookOwnerList response is mapped to the expected types", () => {
  const bookOwnerList = BookOwnerListSchema.parse(sample_response);
  expect(bookOwnerList.length).toBe(5);
  expect(bookOwnerList[4].age).toBe(17);
  expect(bookOwnerList[4].books[1].name).toBe("The Hobbit");
});

test("empty array is mapped correctly", () => {
  const bookOwnerList = BookOwnerListSchema.parse([]);
  expect(bookOwnerList.length).toBe(0);
});

test("mapping rejects incorrect data", () => {
  const incorrectJson = `[{}]`;
  expect(() => {
    BookOwnerListSchema.parse(JSON.parse(incorrectJson));
  }).toThrow("Invalid input");
});
