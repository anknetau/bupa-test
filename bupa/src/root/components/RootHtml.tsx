import { Links, Meta, Scripts, ScrollRestoration } from "react-router";

import { Main } from "@/components/chakra_base.tsx";
import { Box, Flex } from "@chakra-ui/react";
import { Header } from "@/components/layout/Header.tsx";
import { Footer } from "@/components/layout/Footer.tsx";

import { ChakraAppProvider } from "@/components/ui/provider";

export function RootHtml({ children }: { children: React.ReactNode }) {
  const initialColorMode = "dark";
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
        <p>Bupa Root HTML</p>
        <ChakraAppProvider>
          <Main>
            <Flex direction="column" minH="100vh">
              <Box flex="1">
                <Header />
                {children}
              </Box>
              <Box>
                <Footer />
              </Box>
            </Flex>
          </Main>
        </ChakraAppProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
