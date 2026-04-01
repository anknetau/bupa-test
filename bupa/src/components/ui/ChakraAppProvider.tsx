"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function ChakraAppProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      {/* Assumption: this will be in light mode as per design. */}
      <ColorModeProvider {...props} forcedTheme="light" />
    </ChakraProvider>
  );
}
