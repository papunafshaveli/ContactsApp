import { BiSolidShow } from "react-icons/bi";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { FiltersContainer } from "./filterStyles";
import { FaSortAlphaUp } from "react-icons/fa";

const Filters = ({
  searchInput,
  setsearchInput,
  setShowContacts,
  showContacts,
  handleSort,
  sortOrder,
}: {
  searchInput: string;
  setsearchInput: React.Dispatch<React.SetStateAction<string>>;
  setShowContacts: React.Dispatch<React.SetStateAction<boolean>>;
  showContacts: boolean;
  handleSort: () => void;
  sortOrder: string;
}) => {
  return (
    <FiltersContainer>
      {showContacts ? (
        <BiSolidHide
          size={30}
          onClick={() => {
            setShowContacts(!showContacts);
          }}
        />
      ) : (
        <BiSolidShow
          size={30}
          onClick={() => {
            setShowContacts(!showContacts);
          }}
        />
      )}
      <input
        type="text"
        placeholder="Search by First Name"
        value={searchInput}
        onChange={(e) => setsearchInput(e.target.value)}
      />
      {sortOrder === "asc" ? (
        <FaSortAlphaUp size={25} onClick={handleSort} />
      ) : (
        <FaSortAlphaDownAlt size={25} onClick={handleSort} />
      )}
    </FiltersContainer>
  );
};

export default Filters;
