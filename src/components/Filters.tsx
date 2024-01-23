import styled from "styled-components";
import { BiSolidShow } from "react-icons/bi";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";

const Filters = ({
  searchInput,
  setsearchInput,
  setShowContacts,
  showContacts,
  handleSort,
}: {
  searchInput: string;
  setsearchInput: React.Dispatch<React.SetStateAction<string>>;
  setShowContacts: React.Dispatch<React.SetStateAction<boolean>>;
  showContacts: boolean;
  handleSort: () => void;
}) => {
  return (
    <FiltersContainer>
      <div>
        {showContacts ? (
          <BiSolidHide
            size={25}
            onClick={() => {
              setShowContacts(!showContacts);
            }}
          />
        ) : (
          <BiSolidShow
            size={25}
            onClick={() => {
              setShowContacts(!showContacts);
            }}
          />
        )}
      </div>
      <input
        type="text"
        placeholder="Search by First Name"
        value={searchInput}
        onChange={(e) => setsearchInput(e.target.value)}
      />
      <div>
        <FaSortAlphaDownAlt size={25} onClick={handleSort} />
      </div>
    </FiltersContainer>
  );
};

export default Filters;

const FiltersContainer = styled.div`
  padding-top: 40px;

  display: flex;
  gap: 20px;
  justify-content: center;

  input {
    padding: 2px 20px;
  }
`;