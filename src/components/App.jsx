// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import { fetchContacts } from "redux/operations";
import PhonebookPage from "pages/PhonebookPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";


export const App = () => {
  
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="phonebook" element={<PhonebookPage />} /> 
     </Route>
    </Routes>

    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    //   <GlobalStyle />
    // </div>
  );
};

