import styled from "styled-components";

export const CardStyled = styled.li`
  min-width: 300px;
  height: 346px;
  margin-right: 15px;

  border: 2px solid var(--color-gray-20);
  border-radius: 5px;
  overflow: hidden;
  
  img {
    width: 300px;
    height: 150px;
    border-radius: 5px 5px 0px 0px;
    transition: 0.3s ease-in-out;

    :hover {
      transform: scale(1.1);
    }
  }

  div {
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
  }

  div h1 {
    margin-top: 20px;

    font-size: 20px;
    font-weight: 700;
    color: var(--color-gray-100);
  }

  div .paragraph__cat {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-gray-50);
  }

  div .paragraph__price {
    font-weight: 600;
    color: var(--color-primary);
  }

  div button {
    width: 106px;
    height: 40px;

    border: none;
    border-radius: 10px;
    background-color: var(--color-primary);
    cursor: pointer;

    color: var(--color-white-fixed);
  }
`;
