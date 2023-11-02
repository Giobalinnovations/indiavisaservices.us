import Select from 'react-select';

const MultiReactSelectFormik = ({
  options,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <MySelect
      options={options}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      touched={touched}
    />
  );
};

const MySelect = props => {
  const handleChange = value => {
    props.onChange('countryVisitedInLast10Years', value);
  };

  const handleBlur = () => {
    props.onBlur('countryVisitedInLast10Years', true);
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <Select
        id="color"
        options={props.options}
        isMulti
        onChange={handleChange}
        onBlur={handleBlur}
        value={props.value}
      />
      {props.error && props.touched && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{props.error}</div>
      )}
    </div>
  );
};

export default MultiReactSelectFormik;
