'use client';
import React, { createContext, useContext, useReducer } from 'react';

const FormContext = createContext();

const initialState = {
  formId: '653f93593b4799cd2a384da2',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FORM_ID':
      return { ...state, formId: action.payload };
    default:
      return state;
  }
};

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
