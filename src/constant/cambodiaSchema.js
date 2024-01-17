import * as Yup from 'yup';
export const cambodiaSchema = {
  yupSchema: Yup.object().shape({
    passportDateOfIssue: Yup.date().required('Date Of issue is required'),
    dateOfBirth: Yup.date()
      .required('Date Of birth is required')
      .max(
        Yup.ref('passportDateOfIssue'),
        'Date of birth must be earlier than the date of issue'
      ),

    personalDetails: Yup.object().shape({
      familyName: Yup.string().required('Family name is required'),
      firstName: Yup.string().required('First name is required'),
      middleName: Yup.string(),

      countryOfBirth: Yup.string().required('Country of birth is required'),
      countryOfCitizenship: Yup.string().required(
        'Country of citizenship is required'
      ),
      gender: Yup.string().required('Gender is required'),
    }),

    passportDetails: Yup.object().shape({
      passportCountry: Yup.string(),
      passportNumber: Yup.string().required('Passport number is required'),

      passportExpiryDate: Yup.date()
        .min(
          new Date(new Date().getTime() + 180 * 24 * 60 * 60 * 1000),
          'Passport expiry must be valid at least 6 months from Intended Date of Entry.'
        )
        .required('Passport expiry date is required'),
    }),

    contactDetails: Yup.object().shape({
      emailAddress: Yup.string()
        .email('Invalid email address')
        .required('Email address is required'),
      confirmEmailAddress: Yup.string()
        .oneOf([Yup.ref('emailAddress'), null], 'Emails must match')
        .required('Confirm email address is required'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
        .required('Mobile is required'),
    }),

    travelDetails: Yup.object().shape({
      portOfEntry: Yup.string().required('Port of entry is required'),
      proposedDateOfEntry: Yup.date()
        .min(
          new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
          'Proposed date of entry must be at least 5 days from today'
        )
        .required('Proposed date of entry is required'),
      touristPurpose: Yup.string().required('Tourist purpose is required'),
      purposeOfVisit: Yup.string().when('touristPurpose', {
        is: 'no',
        then: schema => schema.required('Purpose of visit is required'),
        otherwise: schema => schema,
      }),
    }),

    termsAndConditions: Yup.boolean()
      .oneOf([true])
      .required('Terms and conditions is required'),
    declareInformation: Yup.boolean()
      .oneOf([true])
      .required('declare information is required'),
  }),
  initialValue: {
    dateOfBirth: '',
    passportDateOfIssue: '',
    personalDetails: {
      familyName: '',
      firstName: '',
      middleName: '',
      countryOfBirth: '',
      countryOfCitizenship: '',
      gender: '',
    },
    passportDetails: {
      passportCountry: '',
      passportNumber: '',
      passportExpiryDate: '',
    },
    contactDetails: {
      emailAddress: '',
      confirmEmailAddress: '',
      phoneNumber: '',
    },
    travelDetails: {
      portOfEntry: '',
      proposedDateOfEntry: '',
      touristPurpose: '',
      purposeOfVisit: '',
    },
    termsAndConditions: false,
    declareInformation: false,
  },
};
