import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { Formik, Field } from "formik";
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import { StyledForm, StyledLabel } from "./ContactForm.styled";
import { addContact } from "redux/contacts/operations";

export const ContactForm = () => {
  const NameSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .matches(
        /^[A-Za-zА-Яа-яЄєІіЇїҐґ\s]+$/,
        'Use only letters'
      )
      .required('Required'),
    number: Yup.string()
      .required('Required')
      .matches(/^\+?\d{2} ?-?\(?\d{3}\)? ?-?\d{3} ?-?\d{2} ?-?\d{2}$/, 'Intenational format number(12 symbol)'),
  });
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        validationSchema={NameSchema}
        initialValues={{
          name: '',
          number: ''
        }}
    
        onSubmit={(values, actions) => {
          dispatch(addContact({
            name: values.name,
            number: values.number
          }))
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel>
            <Field
              component={TextField}
              label="Name"
              name="name"
              variant="standard"
              sx={{ width: 400 }}
            />
          </StyledLabel>
          <StyledLabel>
            <Field
              component={TextField}
              label="Number"
              name="number"
              variant="standard"
              type="string"
              sx={{ width: 400 }}
            />
          </StyledLabel>
          <Button variant="contained" type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  )
};