import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import { StyledForm, StyledLabel } from "./ContactForm.styled";
import { addContact } from "redux/operations";
 
export const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  return (
    <Formik
      initialValues={{
        name: '',
        number: ''
      }}
    
      onSubmit={(values, actions) => {
        for (const el of contacts) {
          if (el.name === values.name) {
            return alert(`${el.name} is already in contacts.`);
          }
        }
        dispatch(addContact({
          name: values.name,
          phone: values.number
        }))
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel>Name
          <Field
            type="text"
            name="name"
            pattern="^[а-яА-ЯёЁa-zA-Z\s]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledLabel>
        <StyledLabel>Number
          <Field
            type="tel"
            name="number"
            pattern="\+\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledLabel>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  )
};