import * as React from "react";
import styled from "styled-components";

const GRADIENTS = {
  yellowGreen: ["#2ae584", "#ffc552"],
  pinkPurple: ["#2ae584", "#ffc552"]
};

export const OutlinedBox = styled.div`
  padding: 1px;
  background-image: ${props =>
    `linear-gradient(-20deg, ${GRADIENTS[props.gradient][0]}, ${
      GRADIENTS[props.gradient][1]
    })`};
`;
