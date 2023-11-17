'use client';
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const FormContext = createContext();

const initialState = {
  formId: null,
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
  if (typeof window !== 'undefined') {
    const storedFormId = localStorage.getItem('formId');
    initialState.formId = storedFormId ? storedFormId : initialState.formId;
  }

  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('formId', state.formId);
    }
  }, [state.formId]);

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
