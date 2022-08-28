import { Input, IconButton, Box } from "@chakra-ui/react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";

const SkillSearch = () => {
  const [query, setQuery] = useState({ skill: "", location: "" });

  const inputChangeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  return (
    <Box display={"flex"} gap={4} m={4}>
      <Input
        value={query.skill}
        onChange={inputChangeHandler}
        name="skill"
        placeholder="Here is a sample placeholder"
      />
      <Input
        value={query.location}
        onChange={inputChangeHandler}
        name="location"
        placeholder="Here is a sample placeholder"
      />
      <IconButton
        aria-label="Search database"
        icon={<GoSearch />}
        onClick={() => {}}
      />
    </Box>
  );
};

export { SkillSearch };
