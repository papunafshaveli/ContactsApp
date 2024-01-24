import Header from "./Header.tsx";
import Filters from "./Filters.tsx";
import { contacts } from "../db.ts";
import { useState } from "react";
import Contacts from "./Contacts.tsx";
import { AppContainer } from "./appStyles.ts";

function App() {
  const [importedContacts, setImportedContacts] = useState(contacts);
  const [searchInput, setsearchInput] = useState<string>("");
  const [showContacts, setShowContacts] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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
        sortOrder={sortOrder}
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
