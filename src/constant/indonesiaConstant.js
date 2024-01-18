import * as Yup from 'yup';
export const indonesiaSchema = {
  yupSchema: Yup.object().shape({
    passportDateOfIssue: Yup.date()
      .required('Date Of issue is required')
      .min(Yup.ref('dateOfBirth'), 'Date of issue must be after date of birth'),
    dateOfBirth: Yup.date()
      .required('Date Of birth is required')
      .max(
        new Date(),
        'Date of birth must be a past date and earlier than date of issue'
      ),
    countryOfCitizenship: Yup.string().required(
      'Country of citizenship is required'
    ),
    passportCountry: Yup.string().oneOf(
      [Yup.ref('countryOfCitizenship'), null],
      'Passport country must be the same as country of citizenship'
    ),

    personalDetails: Yup.object().shape({
      surname: Yup.string().required('Family name is required'),
      givenName: Yup.string().required('First name is required'),
      motherGivenName: Yup.string(),
      gender: Yup.string().required('Gender is required'),
      countryOfBirth: Yup.string().required('Country of birth is required'),
      placeOfBirth: Yup.string().required('Country of citizenship is required'),
    }),

    passportDetails: Yup.object().shape({
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
      phoneNumber: Yup.string().required('Mobile is required'),
    }),

    travelDetails: Yup.object().shape({
      intendedDateOfEntry: Yup.date()
        .min(new Date(), 'Intended Date Of entry must be a future date')
        .required('Intended Date Of entry is required'),
      intendedDateOfExit: Yup.date()
        .min(
          Yup.ref('intendedDateOfEntry'),
          'Intended Date Of exit must be after Intended Date Of entry'
        )
        .required('Intended Date Of exit is required'),
      accommodationType: Yup.string().required(
        'Accommodation Type is required'
      ),
      accommodationAddress: Yup.string().required(
        'Accommodation Address is required'
      ),
      accommodationProvince: Yup.string().required(
        'Accommodation Address is required'
      ),
      travelingWithMinor: Yup.string()
        .oneOf(['yes', 'no'], 'Please select either "yes" or "no"')
        .required('Traveling with minor is required'),
      numberOfMinor: Yup.string().when('travelingWithMinor', {
        is: 'yes',
        then: schema => schema.required('Number of minor is required'),
        otherwise: schema => schema,
      }),
      minorInformation: Yup.array().when('travelingWithMinor', {
        is: 'yes',
        then: schema =>
          schema.of(
            Yup.object().shape({
              minorPassportNumber: Yup.string().required(),
            })
          ),
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
    passportDateOfIssue: '',
    dateOfBirth: '',
    countryOfCitizenship: '',
    passportCountry: '',
    personalDetails: {
      surname: '',
      givenName: '',
      motherGivenName: '',
      gender: '',
      countryOfBirth: '',
      placeOfBirth: '',
    },
    passportDetails: {
      passportNumber: '',
      passportExpiryDate: '',
    },
    contactDetails: {
      emailAddress: '',
      confirmEmailAddress: '',
      phoneNumber: '',
    },
    travelDetails: {
      intendedDateOfEntry: '',
      intendedDateOfExit: '',
      accommodationType: '',
      accommodationAddress: '',
      accommodationProvince: '',
      travelingWithMinor: 'no',
      numberOfMinor: '',
      minorInformation: [],
    },
    termsAndConditions: false,
    declareInformation: false,
  },
};
