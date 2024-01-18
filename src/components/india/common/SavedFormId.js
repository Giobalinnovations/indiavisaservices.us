'use client';
import { useFormContext } from '@/context/formContext';
import React from 'react';

const SavedFormId = () => {
  const { state } = useFormContext();

  return (
    <div className="p-4 mb-4 font-medium text-center text-white bg-black">
      <div>
        Form Saved Succeffsully. Please note down the Application id:{' '}
        <span className="px-2 font-bold text-primary">{state?.formId}</span>
      </div>
    </div>
  );
};

export default SavedFormId;
