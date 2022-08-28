import "./App.css";
import { Heading } from "@chakra-ui/react";
import { SkillSearch } from "./components/skillSearch/SkillSearch";

function App() {
  return (
    <div className="App">
      <Heading>Flair Hunt</Heading>
      {/* <InputHints
        placeholders={[
          "Enter your username here...",
          "Usernames can be 7-18 characters long.",
        ]}
      /> */}

      <SkillSearch />
    </div>
  );
}

export default App;
