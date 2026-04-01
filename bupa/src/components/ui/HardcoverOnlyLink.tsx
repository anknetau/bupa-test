import { Link } from "@chakra-ui/react";
import { useBookOwnerStore } from "@/store/bookOwnerStore";
import { semanticColour } from "@/root/palette";

export const HardcoverOnlyLink = () => {
  const { hardcoverOnly, toggleHardcoverOnly } = useBookOwnerStore();
  return (
    <Link
      onClick={() => toggleHardcoverOnly()}
      textDecoration="underline"
      fontWeight="bold"
      color={semanticColour.link}
    >
      {hardcoverOnly ? "All" : "Hardcover Only"}
    </Link>
  );
};
