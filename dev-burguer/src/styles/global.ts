import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, header {
        font-family: 'Inter', sans-serif;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        --color-gray-100: #333333;
        --color-gray-50: #828282;
        --color-gray-20: #E0E0E0;
        --color-gray-0: #F5F5F5;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-sucess: #168821;
        --color-information: #155BCB;

        --color-white-fixed: #FFFFFF;
    }
`