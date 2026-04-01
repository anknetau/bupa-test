import { useSuspenseQuery } from "@tanstack/react-query";
import type { BookOwner } from "../api/types";
import { fetchBookOwners } from "../api/api";
import { Flex, Spinner } from "@chakra-ui/react";
import { semanticColour } from "@/root/palette";
import { Center, Heading } from "@chakra-ui/react";
import {
  bookListSortedByTitle,
  uniqueBooks,
  uniqueStrings,
} from "@/store/bookOwnerStore";

type GroupedBooksProps = {
  ownedBy?: "adults" | "children";
  hardcoverOnly?: boolean;
};

const GroupedBooks = ({
  ownedBy = "adults",
  hardcoverOnly = false,
}: GroupedBooksProps) => {
  const {
    data: bookOwners,
    isFetching,
    error,
  } = useSuspenseQuery<BookOwner[]>({
    queryKey: [],
    queryFn: fetchBookOwners,
  });

  let owners = bookOwners;

  switch (ownedBy) {
    case "adults":
      owners = owners.filter((owner) => owner.age > 17);
      break;
    case "children":
      owners = owners.filter((owner) => owner.age <= 17);
      break;
  }

  let books = bookListSortedByTitle(uniqueBooks(owners));
  if (hardcoverOnly) {
    books = books.filter((book) => book.type == "Hardcover");
  }
  const bookNames = uniqueStrings(books.map((book) => book.name));

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <Center
      width="100%"
      // borderWidth="medium"
      // borderColor={semanticColour.headerBackground}
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
        {isFetching ? (
          <Spinner size="lg" color={semanticColour.spinnerColour} />
        ) : null}
        {bookNames.map((bookName) => (
          <div key={bookName}>{bookName}</div>
        ))}
      </Flex>
    </Center>
  );
};

export default GroupedBooks;
