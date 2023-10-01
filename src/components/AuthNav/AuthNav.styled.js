import { styled } from "styled-components";
import { NavLink } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
`;
export const NavLinkStyled = styled(NavLink)`
    margin-right: 16px;
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;
`