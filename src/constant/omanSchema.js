import * as Yup from 'yup';
const imageValidation = Yup.mixed()
  .test('fileFormat', 'Only PNG and JPG files are allowed', value => {
    if (!value) {
      return true;
    }

    if (value instanceof File) {
      return ['image/png', 'image/jpeg'].includes(value.type);
    }

    if (typeof value === 'string') {
      return true;
    }

    return false;
  })
  .required('Please select a file or enter a URL');

export const omanSchema = {
  peopleYupSchema: Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    nationality: Yup.string().required('Nationality is required'),
    entryType: Yup.string().required('Entry type is required'),
    gender: Yup.string().required('Gender is required'),
    passportNumber: Yup.string().required('Passport number is required'),
    passportColouredPhoto: imageValidation.required(
      'Passport coloured photo is required'
    ),
    profilePhoto: imageValidation.required('Profile photo is required'),
    passportExpiryDate: Yup.date()
      .min(
        new Date(new Date().getTime() + 180 * 24 * 60 * 60 * 1000),
        'Passport expiry must be valid at least 6 months from Intended Date of Entry.'
      )
      .required('Passport expiry date is required'),
    dateOfBirth: Yup.date()
      .max(new Date(), 'Date of birth cannot be a future date')
      .required('Date of birth is required'),
  }),
  peopleInitialValues: {
    firstName: '',
    lastName: '',
    nationality: '',
    entryType: '',
    gender: '',
    passportNumber: '',
    passportColouredPhoto: '',
    profilePhoto: '',
    passportExpiryDate: '',
    dateOfBirth: '',
  },
  yupSchema: Yup.object().shape({
    currentAddress: Yup.string().required('Current address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip code is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    whatsappNumber: Yup.string().required('WhatsApp number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    purposeOfVisit: Yup.string().required('Purpose of visit is required'),
    arrivalDate: Yup.date()
      .min(new Date(), 'Arrival date cannot be a past date')
      .required('Arrival date is required'),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      'You must accept the terms and conditions'
    ),
  }),
  initialValues: {
    currentAddress: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    purposeOfVisit: '',
    arrivalDate: '',
    termsAndConditions: false,
  },
};
