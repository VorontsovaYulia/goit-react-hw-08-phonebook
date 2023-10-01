import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
  
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
    try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactID, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactID}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateContact = createAsyncThunk("contacts/updateContact", async (contactInfo, thunkAPI) => {
  try {
    const response = await axios.patch(`/contacts/${contactInfo.id}`, contactInfo.contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


