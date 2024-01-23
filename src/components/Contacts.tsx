import { ContactTypes } from "../types/types";
import { FcCallback } from "react-icons/fc";
import { ContactsContainer, Phone } from "./contactStyles";

const Contacts: React.FC<{
  importedContacts: ContactTypes[];
  searchInput: string;
}> = ({ importedContacts, searchInput }) => {
  return (
    <ContactsContainer>
      {importedContacts
        .filter((item) =>
          item.first_name
            .toLocaleLowerCase()
            .includes(searchInput.toLocaleLowerCase())
        )
        .map((item) => (
          <div key={item.id}>
            <img src={`https://picsum.photos/${item.id}`}></img>
            <p>{item.first_name}</p>
            <p>{item.last_name}</p>
            <p>{item.email}</p>
            <Phone>
              <FcCallback size={25} />
              <a href={`tel:${item.phone}`}>{item.phone}</a>
            </Phone>
          </div>
        ))}
    </ContactsContainer>
  );
};

export default Contacts;
