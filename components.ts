import styled from "styled-components";

type Justify = "space-around" | "space-between";

export const FlexBox = styled.div<{
    column?: boolean;
    justify?: Justify;
}>`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  ${props => !!props.justify && `justify-content: ${props.justify}`}
`;

export const Flex = styled.div<{ flex?: number }>`
  flex: ${props => props.flex || 1};
`; 