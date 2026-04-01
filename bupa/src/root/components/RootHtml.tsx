import { Links, Meta, Scripts, ScrollRestoration } from "react-router";

import { Box, Flex } from "@chakra-ui/react";
import { Header } from "@/components/layout/Header.tsx";
import { Footer } from "@/components/layout/Footer.tsx";

import { ChakraAppProvider } from "@/components/ui/ChakraAppProvider";

export function RootHtml({ children }: { children: React.ReactNode }) {
  const initialColorMode = "light";
  return (
    <html
      lang="en"
      className={initialColorMode}
      style={{ colorScheme: initialColorMode }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraAppProvider>
          <main>
            <Flex direction="column">
              <Box flex="1">
                <Header />
                {children}
              </Box>
              <Box>
                <Footer />
              </Box>
            </Flex>
          </main>
        </ChakraAppProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
