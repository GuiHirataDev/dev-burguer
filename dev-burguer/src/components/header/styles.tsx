import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
    height: 139px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--color-gray-0);

    h1 {
        font-size: 30px;
        font-weight: 600;
        color: var(--color-gray-100);
    }

    h1 span {
        font-size: 20px;
        color: var(--color-secondary);
    }

    div {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        position: relative;
    }

    div input {
        width: 90%;
        padding-left: 10px;
        
        border: 1px solid var(--color-gray-20);
        border-radius: 10px;
        outline: none;

        font-size: 18px;
        font-weight: 500;
        color: var(--color-gray-100);

        ::placeholder {
            color: var(--color-gray-20);
        }
    }

    button {
        position: absolute;
        right: 30px;
        top: 10px;
        padding: 12px 20px;

        border: none;
        border-radius: 10px;
        background-color: var(--color-primary);
        cursor: pointer;

        color: var(--color-white-fixed);
    }

    @media (min-width: 650px) {
        height: 80px;
        flex-direction: row;
        justify-content: space-between;

        h1 {
            margin-left: 100px;
        }

        div {
            width: 365px;
            margin-right: 100px;
        }
        
    }
`

