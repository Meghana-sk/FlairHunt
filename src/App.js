import "./App.css";
import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { SkillSearch } from "./components/skillSearch/SkillSearch";
import { ProfileCard } from "./components/profileCard/ProfileCard";

function App() {
  const { profiles } = useSelector((state) => state.profiles);
  console.log("PROFILES", profiles);
  return (
    <div className="App">
      <Heading>Flair Hunt</Heading>
      <SkillSearch />
      {profiles.length > 0
        ? profiles.map((profile) => <ProfileCard {...profile} />)
        : null}
    </div>
  );
}

export default App;
