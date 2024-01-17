import * as Yup from 'yup';
export const malaysiaSchema = {
  yupSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    arriveDestination: Yup.date()
      .min(new Date(), 'date of arrival must be the feature date')
      .required(),
    departDestination: Yup.date()
      .min(
        Yup.ref('arriveDestination'),
        'date of departure must be after date of arrival'
      )
      .required(),
    destinationCountry: Yup.string().required(
      'Destination country is required'
    ),
    emergencyContactEmail: Yup.string()
      .email('Invalid email address')
      .required('Emergency contact email is required'),
    emergencyContactFullName: Yup.string().required(
      'Emergency contact full name is required'
    ),
    emergencyContactPhoneNumber: Yup.string().required(
      'Emergency contact phone number is required'
    ),
    passportExpirationDate: Yup.date()
      .min(
        new Date(new Date().getTime() + 180 * 24 * 60 * 60 * 1000),
        'Passport expiry must be valid at least 6 months from Intended Date of Entry.'
      )
      .required('Passport expiry date is required'),
  }),
  initialValues: {
    email: '',
    arriveDestination: '',
    departDestination: '',
    destinationCountry: '',
    emergencyContactEmail: '',
    emergencyContactFullName: '',
    emergencyContactPhoneNumber: '',
    passportExpirationDate: '',
  },

  personInitialValues: {
    formId: '',
    firstName: '',
    lastName: '',
    nationality: '',
    gender: '',
    dateOfBirth: '',
    countryOfBirth: '',
    countryOfResidence: '',
    passportNumber: '',
    passportIssueDate: '',
    passportExpirationDate: '',
  },
  personYupSchema: Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    nationality: Yup.string().required('Nationality is required'),
    gender: Yup.string().required('Gender is required'),
    dateOfBirth: Yup.date()
      .required('Date Of birth is required')
      .max(
        Yup.ref('passportIssueDate'),
        'Date of birth must be earlier than the date of issue'
      ),
    countryOfBirth: Yup.string().required('Country of Birth is required'),
    countryOfResidence: Yup.string().required(
      'Country of Residence is required'
    ),
    passportNumber: Yup.string().required('Passport Number is required'),
    passportIssueDate: Yup.date().required('Passport Issue Date is required'),
    passportExpirationDate: Yup.date()
      .min(
        new Date(new Date().getTime() + 180 * 24 * 60 * 60 * 1000),
        'Passport expiry must be valid at least 6 months from Intended Date of Entry.'
      )
      .required('Passport expiry date is required'),
  }),
};
