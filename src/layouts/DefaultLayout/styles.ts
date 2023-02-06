import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: 46.5rem;
  height: calc(100vh- 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-800"]};

  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    width: 3rem;
    right: 3rem;
    display: flex;
    justify-content: center;

    color: ${(props) => props.theme["gray-100"]};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme["green-500"]};
    }

    &.active {
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;
