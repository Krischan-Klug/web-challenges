import Link from "next/link";
import styled, { css } from "styled-components";

export default function HomePage() {
  const StyledLink = styled(Link)`
    color: green;

    &:hover {
      color: blue;
    }

    ${(props) => {
      if (props.variation === "primary") {
        return css`
          color: red;
        `;
      }
    }}
  `;
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <StyledLink variation="primary" href="/cities">
        <h2>Cities</h2>
      </StyledLink>
    </div>
  );
}
