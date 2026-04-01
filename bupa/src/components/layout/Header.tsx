import { semanticColour } from "@/root/palette";
import { Center, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Center
      bg={semanticColour.headerBackground}
      color={semanticColour.headerTextColor}
      padding="4"
    >
      <Heading size="4xl">Owners and Books</Heading>
    </Center>
  );
};
