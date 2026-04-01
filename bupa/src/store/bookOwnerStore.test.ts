import { expect, test } from "vitest";
import { makeBookId } from "./bookOwnerStore";
import type { Book } from "@/api/types";

test("book ID generation should work", () => {
  const book: Book = { name: "", type: "Ebook" };
  expect(makeBookId(book)).toBe("-E");
});

test("book ID generation should work", () => {
  const book: Book = { name: "Of Mice and Men", type: "Hardcover" };
  expect(makeBookId(book)).toBe("Of Mice and Men-H");
});
