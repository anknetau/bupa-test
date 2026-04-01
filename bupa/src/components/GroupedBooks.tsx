import { Flex } from "@chakra-ui/react";
import { semanticColour } from "@/root/palette";
import { Center, Heading } from "@chakra-ui/react";
import {
  bookListSortedByTitle,
  uniqueBooks,
  uniqueStrings,
  useBookOwnerStore,
} from "@/store/bookOwnerStore";
import type { BookOwner } from "@/api/types";

type AdultsOrChilden = "adults" | "children";

type GroupedBooksProps = {
  ownedBy?: AdultsOrChilden;
  hardcoverOnly?: boolean;
};

const filterOwnedList = (
  bookOwnerList: BookOwner[],
  ownedBy: AdultsOrChilden,
) => {
  switch (ownedBy) {
    case "adults":
      return bookOwnerList.filter((owner) => owner.age > 17);
    case "children":
      return bookOwnerList.filter((owner) => owner.age <= 17);
  }
};

const GroupedBooks = ({ ownedBy = "adults" }: GroupedBooksProps) => {
  const { bookOwnerList, hardcoverOnly } = useBookOwnerStore();
  const filteredBookOwnerList = filterOwnedList(bookOwnerList, ownedBy);

  let books = bookListSortedByTitle(uniqueBooks(filteredBookOwnerList));
  if (hardcoverOnly) {
    books = books.filter((book) => book.type == "Hardcover");
  }
  const bookNames = uniqueStrings(books.map((book) => book.name));

  return (
    <Center
      width="100%"
      flex="1"
      p="2"
      borderColor={semanticColour.groupdBooksBorder}
      borderWidth={{ base: "medium", md: 0 }}
      borderRadius={{ base: "10px", md: 0 }}
      boxShadow={{ base: `6px 6px 0 ${semanticColour.shadow}`, md: "0 0 0" }}
    >
      <Flex direction="column" flex="1">
        <Center
          bg={semanticColour.headerBackground}
          color={semanticColour.headerTextColor}
          padding="2"
        >
          <Heading size="4xl">
            {hardcoverOnly && "Hardcover "}
            Books owned by {ownedBy == "adults" ? "Adults" : "Children"}
          </Heading>
        </Center>
        {bookNames.map((bookName) => (
          <div key={bookName}>{bookName}</div>
        ))}
      </Flex>
    </Center>
  );
};

export default GroupedBooks;
