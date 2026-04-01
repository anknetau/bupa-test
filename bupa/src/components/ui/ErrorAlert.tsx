import { GetBooksButton } from "@/components/ui/GetBooksButton";
import { Alert } from "@chakra-ui/react";

export const ErrorAlert = ({ error }: { error: string }) => (
  <Alert.Root status="error">
    <Alert.Indicator />
    <Alert.Content>
      <Alert.Title>An error has occurred</Alert.Title>
      <Alert.Description>{error}</Alert.Description>
      <GetBooksButton />
    </Alert.Content>
  </Alert.Root>
);
