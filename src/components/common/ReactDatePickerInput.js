import React from 'react';
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import { useEffect } from 'react';
import { ErrorMessage } from 'formik';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendarDate } from 'react-icons/ci';
export default function ReactDatePickerInput({
  setFieldValue,
  name,
  selected,
  minDate = '',
  maxDate = '',
  disabled = false,
}) {
  // const {
  //   values: { travelDetails },
  //   touched,
  //   setFieldValue,
  // } = useFormikContext();
  // const [field, meta] = useField(props);

  // useEffect(() => {
  //   // set the value of textC, based on textA and textB
  //   if (travelDetails.travelingWithMinor === 'no') {
  //     setFieldValue('travelDetails.numberOfMinor', '');
  //     setFieldValue('travelDetails.minorInformation', []);
  //   }
  // }, [travelDetails.travelingWithMinor, setFieldValue, props.name]);

  return (
    <>
      <ReactDatePicker
        disabled={disabled}
        placeholderText="select a date"
        // peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        name={name}
        selected={selected}
        onChange={date => setFieldValue(name, date)}
        className="border"
        showIcon
        icon={<CiCalendarDate />}
        toggleCalendarOnIconClick
        minDate={minDate}
        maxDate={maxDate}
        // {...props}
        // {...field}
      />
      <ErrorMessage name={name}>
        {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
      </ErrorMessage>
      {/* testing code */}
      {/* {!!meta.touched && !!meta.error && <div>{meta.error}</div>} */}
      {/* testing code end here */}
    </>
  );
}
