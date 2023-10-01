import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import { TextField } from 'formik-mui';
import { StyledForm, StyledLabel } from "./ContactForm.styled";
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";
import Button from '@mui/material/Button';
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup';
import { Filter } from "components/Filter/Filter";
 
export const ContactForm = () => {
  const NameSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .matches(
        /^[A-Za-zА-Яа-яЄєІіЇїҐґ\s]+$/,
        'Only alphabets and spaces are allowed'
      )
      .required('Required'),
    number: Yup.string()
      .required('Required')
      .matches(/^\+?\d{2} ?-?\(?\d{3}\)? ?-?\d{3} ?-?\d{2} ?-?\d{2}$/, 'Intenational format number(12 symbol)'),
  });
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <>
    <Formik
      validationSchema={NameSchema}
      initialValues={{
        name: '',
        number: ''
      }}
    
      onSubmit={(values, actions) => {
        // for (const el of contacts) {
        //   if (el.name === values.name) {
        //     return alert(`${el.name} is already in contacts.`);
        //   }
        // }
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
          // InputProps={{ notched: true }}
          // type="text"
          // name="name"
          // pattern="^[а-яА-ЯёЁa-zA-Z\s]+$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
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

            // InputProps={{ notched: true }}
            // type="tel"
            // pattern="\+\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
        </StyledLabel>
        {/* <button type="submit">Add contact</button> */}
        <Button variant="contained" type="submit">Add contact</Button>
      </StyledForm>
      </Formik>
      </>
  )
};