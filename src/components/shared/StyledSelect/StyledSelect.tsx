import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { SelectI } from "../../../utils/interfaces";

const CustomSelect = styled.div``;

const CustomOptions = styled.div``;

const StyledSelect: React.FC<{
  currentOption: SelectI;
  options: SelectI[];
  setCurrentOption: React.Dispatch<SetStateAction<SelectI>>;
}> = ({ currentOption, options, setCurrentOption }) => {
  const [isSelected, setSelect] = useState(false);

  const onChangeOption = (newOption: SelectI) => {
    setCurrentOption(newOption);
    setSelect(false)
  };

  return (
    <div>
      <CustomSelect onClick={() => setSelect((prev) => !prev)}>
        {currentOption.selectName}
      </CustomSelect>
      {isSelected &&
        options.map((option: SelectI) => (
          <CustomOptions onClick={() => onChangeOption(option)}>
            {option.selectName}
          </CustomOptions>
        ))}
    </div>
  );
};

export default StyledSelect;
