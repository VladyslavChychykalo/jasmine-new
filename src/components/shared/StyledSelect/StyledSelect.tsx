import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { SelectTeamI, SelectPriceI } from "../../../utils/interfaces";

const CustomSelect = styled.div``;

const CustomOptions = styled.div``;

const StyledSelect: React.FC<{
  currentOption: SelectTeamI | SelectPriceI;
  options: SelectTeamI[] | SelectPriceI[];
  setCurrentOption: React.Dispatch<SetStateAction<SelectTeamI | SelectPriceI>>;
}> = ({ currentOption, options, setCurrentOption }) => {
  const [isSelected, setSelect] = useState(false);

  const onChangeOption = (newOption: SelectTeamI | SelectPriceI) => {
    setCurrentOption(newOption);
    setSelect(false);
  };

  return (
    <div>
      <CustomSelect onClick={() => setSelect((prev) => !prev)}>
        {currentOption.selectName}
      </CustomSelect>
      {isSelected &&
        options.map((option: SelectTeamI | SelectPriceI) => (
          <CustomOptions onClick={() => onChangeOption(option)}>
            {option.selectName}
          </CustomOptions>
        ))}
    </div>
  );
};

export default StyledSelect;
