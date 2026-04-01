import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./ColorModeProvider";

const system = createSystem(defaultConfig, {
  theme: {
    breakpoints: {
      md: "600px",
    },
  },
});

export function ChakraAppProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      {/* Assumption: this will be in light mode as per design. */}
      <ColorModeProvider {...props} forcedTheme="light" />
    </ChakraProvider>
  );
}
