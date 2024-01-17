import * as yup from 'yup';
export const egyptSchema = {
  initialValues: {
    typeOfVisa: '',
    numberOfVisa: '',
    processingTime: 'normal',
    covidInsurance: false,
    email: '',
    phoneNumber: '',
    communicationChannel: '',
    communicationChannelNumberOrId: '',
  },
  yupSchema: yup.object().shape({
    typeOfVisa: yup.string().required(),
    numberOfVisa: yup.number().required().positive().integer(),
    processingTime: yup.string().required().oneOf(['normal', 'urgent']),
    covidInsurance: yup.boolean().required(),
    email: yup.string().required().email(),
    phoneNumber: yup.string().required(),
    communicationChannel: yup.string().required(),
    communicationChannelNumberOrId: yup.string().required(),
  }),
  initialValuesVisaDetails: {
    passportDetails: [
      {
        idFullName: '',
        gender: '',
        dateOfBirth: '',
        nationality: '',
        passportNumber: '',
      },
    ],
    orderDetails: {
      dateOfArrival: '',
      dateOfDeparture: '',
      specialRequest: '',
    },
    termsAndConditions: false,
    confirmation: false,
  },
  yupSchemaVisaDetails: yup.object().shape({
    passportDetails: yup.array().of(
      yup.object().shape({
        idFullName: yup.string().required(),
        gender: yup.string().required().oneOf(['male', 'female']),
        dateOfBirth: yup
          .date()
          .max(new Date(), 'Date of birth must be in the past')
          .required(),
        nationality: yup.string().required(),
        passportNumber: yup.string().required(),
      })
    ),
    orderDetails: yup.object().shape({
      dateOfArrival: yup
        .date()
        .min(new Date(), 'date of arrival must be the feature date')
        .required(),
      dateOfDeparture: yup
        .date()
        .min(
          yup.ref('dateOfArrival'),
          'date of departure must be after date of arrival'
        )
        .required(),
      specialRequest: yup.string().optional(),
    }),
    termsAndConditions: yup.boolean().required().oneOf([true]),
    confirmation: yup.boolean().required().oneOf([true]),
  }),
};
