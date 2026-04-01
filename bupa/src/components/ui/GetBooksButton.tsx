import { Button } from "@chakra-ui/react";
import { semanticColour } from "../../root/palette";

export const GetBooksButton = () => {
  return (
    <Button
      bgColor={semanticColour.buttonBackground}
      onClick={() => console.log("Coming soon!")}
    >
      Get Books
    </Button>
  );
};
