import styled from "styled-components";

export const ListStyled = styled.section`
    display: flex;
    margin: 15px 0px 15px 15px;

    ul {
        width: 100%;
        display: flex;
        overflow-y: hidden;
        overflow-x: scroll;
    }

    @media (min-width: 650px) {
        width: 65%;

        ul {
            overflow-x: hidden;
            flex-wrap: wrap;
        }
    }

`