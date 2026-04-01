import GroupedBooks from "@/components/GroupedBooks";
import {
  Button,
  Center,
  Container,
  Flex,
  Link,
  Separator,
} from "@chakra-ui/react";
import { useState } from "react";
import { semanticColour } from "../palette";

/* eslint-disable react-refresh/only-export-components */
export function meta() {
  return [{ title: "Bupa Test" }, { name: "description", content: "Bupa" }];
}

const Home = () => {
  const [hardcoverOnly, setHardcoverOnly] = useState(false);
  return (
    <>
      <Container width="80%">
        <Flex alignItems="flex-start" p="2" justify="center" gap="4" mt="8">
          <Center verticalAlign="top" flex="1">
            <GroupedBooks ownedBy="adults" hardcoverOnly={hardcoverOnly} />
          </Center>
          <Center verticalAlign="top" flex="1">
            <GroupedBooks ownedBy="children" hardcoverOnly={hardcoverOnly} />
          </Center>
        </Flex>
        <Separator color="red" size="lg" m="4" />
        <Flex justify="flex-end" p="2" gap="4">
          <Link
            onClick={() => setHardcoverOnly((value) => !value)}
            textDecoration="underline"
            fontWeight="bold"
            color={semanticColour.link}
          >
            {hardcoverOnly ? "All" : "Hardcover Only"}
          </Link>
          <Button
            bgColor={semanticColour.buttonBackground}
            onClick={() => console.log("Coming soon!")}
          >
            Get Books
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
