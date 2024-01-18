'use client';
import { useField, useFormikContext } from 'formik';
import { useEffect } from 'react';

export default function MyDependentField(props) {
  const { touched, setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  useEffect(() => {
    if (props.dependentFields.trim() !== '' && props.sameAddress) {
      setFieldValue(props.name, `${props.dependentFields}`);
    }
  }, [setFieldValue, props.name, props.sameAddress, props.dependentFields]);

  return (
    <>
      <input {...props} {...field} className="form-input" />
      {!!meta.touched && !!meta.error && (
        <div className="text-red-600">{meta.error}</div>
      )}
    </>
  );
}
