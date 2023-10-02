import { styled } from "styled-components";
import Box from '@mui/material/Box';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Text = styled.p`
    text-align: center;
`;

export const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
`;