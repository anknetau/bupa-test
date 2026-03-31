import { expect, test } from "vitest";
import { BookOwnerListSchema } from "./types";

const sample_json = `[
  {
    "name": "Jane",
    "age": 23,
    "books": [
      {
        "name": "Hamlet",
        "type": "Hardcover"
      },
      {
        "name": "Wuthering Heights",
        "type": "Paperback"
      }
    ]
  },
  {
    "name": "Charlotte",
    "age": 14,
    "books": [
      {
        "name": "Hamlet",
        "type": "Paperback"
      }
    ]
  },
  {
    "name": "Max",
    "age": 25,
    "books": [
      {
        "name": "React: The Ultimate Guide",
        "type": "Hardcover"
      },
      {
        "name": "Gulliver's Travels",
        "type": "Hardcover"
      },
      {
        "name": "Jane Eyre",
        "type": "Paperback"
      },
      {
        "name": "Great Expectations",
        "type": "Hardcover"
      }
    ]
  },
  {
    "name": "William",
    "age": 15,
    "books": [
      {
        "name": "Great Expectations",
        "type": "Hardcover"
      }
    ]
  },
  {
    "name": "Charles",
    "age": 17,
    "books": [
      {
        "name": "Little Red Riding Hood",
        "type": "Hardcover"
      },
      {
        "name": "The Hobbit",
        "type": "Ebook"
      }
    ]
  }
]
`;

test("BookOwnerList response is mapped to the expected types", () => {
  const bookOwnerList = BookOwnerListSchema.parse(JSON.parse(sample_json));
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
