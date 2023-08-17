import { styled } from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    flex-direction: column;
    align-items: baseline;
    border: 1px solid black;
    padding: 20px 0;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;