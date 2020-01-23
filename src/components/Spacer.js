import styled from "styled-components";

export const Spacer = styled.div`
  display: inline-flex;
  margin-bottom: ${props => props.width || props.size};
  margin-right: ${props => props.height || props.width || props.size};
`;
