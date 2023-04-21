import styled from "styled-components";

export const CartStyled = styled.section`
  width: 330px;
  display: flex;
  flex-direction: column;
  margin: 0px auto 10px auto;

  background-color: var(--color-gray-0);
  border-radius: 0px 0px 5px 5px;

  h2 {
    width: 310px;
    height: 65px;
    display: flex;
    align-items: center;
    padding-left: 21px;

    border-radius: 5px 5px 0px 0px;
    background-color: var(--color-primary);

    font-size: 18px;
    font-weight: 700;
    color: var(--color-white-fixed);
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CartItem = styled.li`
  height: 100px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  div {
    display: flex;
  }

  div img {
    width: 70px;
    height: 70px;
    margin-right: 10px;

    border-radius: 5px;
  }

  div span h3 {
    margin: 10px 0px 15px 0px;

    font-size: 18px;
    font-weight: 700;
    color: var(--color-gray-100);
  }

  div span p {
    font-size: 14px;
    color: var(--color-gray-50);
  }

  button {
    position: absolute;
    right: 0px;
    top: 28px;

    border: none;
    background-color: transparent;
    cursor: pointer;

    font-size: 12px;
    font-weight: 600;
    color: var(--color-gray-50);
  }
`;

export const TotalValueDiv = styled.div`
    width: 90%;
    height: 145px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    border-top: 1px solid var(--color-gray-50);
    border-radius: 0px 0px 5px 5px;

    span {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
    }

    span .total {
        font-weight: 600;
        color: var(--color-gray-100);
    }

    span .value {
        font-weight: 600;
        color: var(--color-gray-50);
    }

    button {
        width: 90%;
        height: 80px;
        padding: 20px;
        margin: 30px auto;

        border: none;
        border-radius: 10px;
        background-color: var(--color-gray-20);
        cursor: pointer;
        
        font-weight: 600;
        color: var(--color-gray-50);
    }
`
