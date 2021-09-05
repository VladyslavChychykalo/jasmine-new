import { useState } from "react";
import { StyledSectionTitle, StyledDot, NextImage } from "../shared";
import * as s from "./StyledTeam";

const Team = () => {
  const [isSelected, setSelect] = useState(false);
  const [defaultOption, setDefaultOption] = useState({});
  return (
    <s.StyledContainer>
      <StyledSectionTitle>Мастера</StyledSectionTitle>
    </s.StyledContainer>
  );
};

export default Team;
