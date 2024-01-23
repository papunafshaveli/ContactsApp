import styled from "styled-components";
import { ContactTypes } from "../types/types";
import { FcCallback } from "react-icons/fc";

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

const ContactsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #607d8b;
  gap: 20px;

  div {
    display: flex;
    align-items: center;

    gap: 10px;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  p {
    width: 280px;
    font-size: 2rem;
  }
  a {
    font-size: 2rem;
  }
`;

const Phone = styled.div``;
