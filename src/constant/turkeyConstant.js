import * as Yup from 'yup';
const today = new Date();
today.setHours(0, 0, 0, 0);

const isNotPast = value => {
  const selectedDate = new Date(value);
  return selectedDate >= today;
};

const isNotFuture = value => {
  const selectedDate = new Date(value);
  return selectedDate <= today;
};

export const applicationSchema = {
  yupSchema: Yup.object().shape({
    countryCitizenship: Yup.string().required(
      'Country citizenship is required'
    ),
    arrivalDate: Yup.date()
      .required('Expected Date of Arrival is required')
      .test('is-not-past', 'Date cannot be in the past', isNotPast),

    passportDetails: Yup.array().of(
      Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        nationality: Yup.string().required('Nationality is required'),
        passportNumber: Yup.string().required('Passport number is required'),
        dateOfBirth: Yup.date()
          .required('Date of birth is required')
          .test('is-not-future', 'Date cannot be in the future', isNotFuture),
      })
    ),
    contactDetailsFullName: Yup.string().required(
      'Contact full name is required'
    ),
    contactDetailsAddress: Yup.string().required('Contact address is required'),
    contactDetailsEmail: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    contactDetailsContactNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be a valid 10-digit number')
      .required('Phone is required'),
    numberOfEntries: Yup.string().required('Number of entries is required'),
    visaDuration: Yup.string().required('Visa duration is required'),
    yourStayCannotExceed: Yup.string().required(
      'Maximum stay duration is required'
    ),
  }),
  initialValues: {
    countryCitizenship: '',
    arrivalDate: '',
    passportDetails: [
      {
        fullName: '',
        nationality: '',
        passportNumber: '',
        dateOfBirth: '',
      },
    ],
    contactDetailsFullName: '',
    contactDetailsAddress: '',
    contactDetailsEmail: '',
    contactDetailsContactNumber: '',
    numberOfEntries: 'single entry',
    visaDuration: '180 days',
    yourStayCannotExceed: '30 days',
  },
};


