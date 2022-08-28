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

const ProfileCard = ({ profileDetails = {}, numberOfPosts, setProfile }) => {
  return (
    <Box p={4}>
      <Flex
        flexDirection={"column"}
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"500px"}
      >
        <Avatar size={"xl"} src={""}></Avatar>
        <Heading>
          {"firstName"} {"lastName"}
        </Heading>
        <Text fontSize={`16px`} fontWeight="600">
          @{"username"}
        </Text>

        <Text borderRadius={"md"} placeholder="bio">
          {"bio"}
        </Text>
        <Link color={"blue.600"} href={"website"} isExternal>
          {"website"}
        </Link>
        <HStack maxW={"500px"} bg="white" borderRadius="lg">
          <VStack py="2" px="4">
            <Text fontWeight="700">{numberOfPosts}</Text>
            <Text>Posts</Text>
          </VStack>
          <VStack py="2" px="4" cursor={"pointer"}>
            <Text fontWeight="700">{"followers?.length"}</Text>
            <Text>Followers</Text>
          </VStack>
          <VStack py="2" px="4" cursor={"pointer"}>
            <Text fontWeight="700">{"following?.length"}</Text>
            <Text>Following</Text>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export { ProfileCard };
