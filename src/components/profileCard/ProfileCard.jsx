import {
  Flex,
  Box,
  Avatar,
  Text,
  Heading,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";

const ProfileCard = ({ avatar_url, login, gists }) => {
  return (
    <Box p={4}>
      <Flex
        flexDirection={"column"}
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"500px"}
      >
        <Avatar size={"xl"} src={avatar_url}></Avatar>
        <Heading>
          {"firstName"} {"lastName"}
        </Heading>
        <Text fontSize={`16px`} fontWeight="600">
          @{login}
        </Text>

        <Text borderRadius={"md"} placeholder="bio">
          {"bio"}
        </Text>
        <Link color={"blue.600"} href={"website"} isExternal>
          {"website"}
        </Link>
        <HStack maxW={"500px"} bg="white" borderRadius="lg">
          <VStack py="2" px="4">
            <Text fontWeight="700">{33}</Text>
            <Text>Repositories</Text>
          </VStack>
          <VStack py="2" px="4" cursor={"pointer"}>
            <Text fontWeight="700">{0}</Text>
            <Text>Gists</Text>
          </VStack>
          <VStack py="2" px="4" cursor={"pointer"}>
            <Text fontWeight="700">{22}</Text>
            <Text>Followers</Text>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export { ProfileCard };
