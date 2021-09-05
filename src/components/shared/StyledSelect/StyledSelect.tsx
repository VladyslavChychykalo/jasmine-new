import styled from "styled-components";
import { SelectI } from "../../../utils/interfaces";

const CustomSelect = styled.div``;

const CustomOptions = styled.div``;

const StyledSelect: React.FC<{
  isSelected: boolean;
  options: SelectI[];
  onChangeOption: () => null;
}> = ({ isSelected, options, onChangeOption }) => {
  return (
    <div>
      <CustomSelect></CustomSelect>
      {isSelected &&
        options.map((el: SelectI) => (
          <CustomOptions onClick={onChangeOption}></CustomOptions>
        ))}
    </div>
  );
};

export default StyledSelect;
