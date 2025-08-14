import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={4}>Dashboard Challenge</Heading>
      <Text color="gray.600" mb={4}>
        ✅ Chakra UI v3 + Panda CSS + Public Sans
      </Text>
      <Text fontSize="sm" color="gray.500">
        User: mr-tackie • 2025-08-14 16:26:20
      </Text>
    </Box>
  );
}