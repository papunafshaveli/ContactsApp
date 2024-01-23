import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import { contacts } from "./db.ts";
import { useState } from "react";
import Contacts from "./components/Contacts.tsx";

function App() {
  const [importedContacts, setImportedContacts] = useState(contacts);
  const [searchInput, setsearchInput] = useState<string>("");
  const [showContacts, setShowContacts] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const handleSort = () => {
    const sortedContacts = [...importedContacts];
    sortedContacts.sort((a, b) => {
      const nameA = a.first_name.toLowerCase();
      const nameB = b.first_name.toLowerCase();
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setImportedContacts(sortedContacts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  console.log(searchInput);
  return (
    <AppContainer>
      <Header />
      <Filters
        searchInput={searchInput}
        setsearchInput={setsearchInput}
        setShowContacts={setShowContacts}
        showContacts={showContacts}
        handleSort={handleSort}
      />
      {showContacts && (
        <Contacts
          importedContacts={importedContacts}
          searchInput={searchInput}
        />
      )}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;
