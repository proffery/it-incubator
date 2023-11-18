import { css, styled } from "styled-components";
import { theme } from "./styles/Theme.styled";

type ButtonPropsType = {
    buttonType: 'primary' | 'outlined'
}

export const Button = styled.button<ButtonPropsType>`

    border: 2px solid ${theme.colors.primary};
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    padding: 6px 11px;
    margin-left: .5rem;
    min-width: 82px;
    background-image: linear-gradient(90deg, rgba(166, 188, 250, 1), rgba(33, 87, 242, 1));

    ${props => props.buttonType === 'primary' && css<ButtonPropsType>`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.background};
    `}

    ${props => props.buttonType === 'outlined' && css<ButtonPropsType>`
        background-color: ${theme.colors.background};
        color: ${theme.colors.primary};
    `}
`