import { BiSolidShow } from "react-icons/bi";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { FiltersContainer } from "./filterStyles";

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

      <FaSortAlphaDownAlt size={25} onClick={handleSort} />
    </FiltersContainer>
  );
};

export default Filters;
