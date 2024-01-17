import * as Yup from 'yup';

export const touristIndividualsSchema = {
  yupSchema: Yup.object().shape({
    familyNameIndividualTourist: Yup.string().required(
      ' familyName is required'
    ),
    givenNameIndividualTourist: Yup.string().required(' GivenName is required'),
    titleIndividualTourist: Yup.string().required(' Title is required'),
    dateOfBirthIndividualTourist: Yup.date().required(
      ' Date Of Birth is required'
    ),
    genderIndividualTourist: Yup.string().required(' Gender is required'),
    nationalityIndividualTourist: Yup.string().required(
      ' Nationality is required'
    ),
    countryOfBirthIndividualTourist: Yup.string().required(
      ' Country of birth is required'
    ),
    covidVaccinatedIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    occupationIndividualTourist: Yup.string().required(
      'Occupation is required'
    ),
    passportNumberIndividualTourist: Yup.string().required(
      'Passport Number  is required'
    ),
    issueDateIndividualTourist: Yup.date().required('Issue Date  is required'),
    expiryDateIndividualTourist: Yup.date().required(
      'Expiry Date  is required'
    ),

    passportImageIndividualTourist: Yup.mixed()
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
      .required('Please select a file or enter a URL'),

    isChildInformationEnable: Yup.boolean().notRequired(),
    childInformation: Yup.array().of(
      Yup.object().shape({
        surnameFamilyName: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('Surname is required'),
          otherwise: schema => schema.notRequired(),
        }),
        otherGivenNames: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('otherGivenNames is required'),
          otherwise: schema => schema.notRequired(),
        }),
        dateOfBirth: Yup.date().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('date of birth is required'),
          otherwise: schema => schema.notRequired(),
        }),
        gender: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('gender is required'),
          otherwise: schema => schema.notRequired(),
        }),
        relationship: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('relationship is required'),
          otherwise: schema => schema.notRequired(),
        }),
      })
    ),

    whereHaveBeenIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    attendantArrivalDateIndividualTourist: Yup.date().required(
      'This Field is required'
    ),
    purposeOfVisitIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    visaValidPeriodIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    portOfDepartureIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    arilineVesselIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    flightVesselNumberIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    addressLineOneIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    cityIndividualTourist: Yup.string().required('This Field is required'),
    stateIndividualTourist: Yup.string().required('This Field is required'),
    zipCodeIndividualTourist: Yup.string().required('This Field is required'),
    countryIndividualTourist: Yup.string().required('This Field is required'),
    addressInSrilankaIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    emailIndividualTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    alternateEmailIndividualTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    telephoneIndividualTourist: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Telephone number must be a valid 10-digit number'
      )
      .required('Phone is required'),
    mobileIndividualTourist: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
      .required('Mobile is required'),
    faxNumberIndividualTourist: Yup.string().required('This Field is required'),
    validResidenceIndividualTourist: Yup.string().notRequired(),
    validEtaOrExtensionIndividualTourist: Yup.string().notRequired(),
    multipleEntryVisaIndividualTourist: Yup.string().notRequired(),
  }),
  initialValues: {
    familyNameIndividualTourist: '',
    givenNameIndividualTourist: '',
    titleIndividualTourist: '',
    dateOfBirthIndividualTourist: '',
    genderIndividualTourist: '',
    nationalityIndividualTourist: '',
    countryOfBirthIndividualTourist: '',
    covidVaccinatedIndividualTourist: '',
    occupationIndividualTourist: '',
    passportNumberIndividualTourist: '',
    issueDateIndividualTourist: '',
    expiryDateIndividualTourist: '',
    passportImageIndividualTourist: '',

    isChildInformationEnable: false,
    childInformation: [
      {
        surnameFamilyName: '',
        otherGivenNames: '',
        dateOfBirth: '',
        gender: '',
        relationship: '',
      },
    ],

    whereHaveBeenIndividualTourist: '',
    attendantArrivalDateIndividualTourist: '',
    purposeOfVisitIndividualTourist: '',
    visaValidPeriodIndividualTourist: '',
    portOfDepartureIndividualTourist: '',
    arilineVesselIndividualTourist: '',
    flightVesselNumberIndividualTourist: '',
    addressLineOneIndividualTourist: '',
    addressLineTwoIndividualTourist: '',
    cityIndividualTourist: '',
    stateIndividualTourist: '',
    zipCodeIndividualTourist: '',
    countryIndividualTourist: '',
    addressInSrilankaIndividualTourist: '',
    emailIndividualTourist: '',
    alternateEmailIndividualTourist: '',
    telephoneIndividualTourist: '',
    mobileIndividualTourist: '',
    faxNumberIndividualTourist: '',
    validResidenceIndividualTourist: '',
    validEtaOrExtensionIndividualTourist: '',
    multipleEntryVisaIndividualTourist: '',
  },
};
export const touristGroupsSchema = {
  yupSchema: Yup.object().shape({
    whereHaveBeenGroupTourist: Yup.string().required('This Field is required'),
    attendantArrivalDateGroupTourist: Yup.string().required(
      'This Field is required'
    ),
    purposeOfVisitGroupTourist: Yup.string().required('This Field is required'),
    visaValidPeriodGroupTourist: Yup.string().required(
      'This Field is required'
    ),
    portOfDepartureGroupTourist: Yup.string().required(
      'This Field is required'
    ),
    ArilineVesselGroupTourist: Yup.string().required('This Field is required'),
    flightVesselNumberGroupTourist: Yup.string().required(
      'This Field is required'
    ),
    addressLineOneGroupTourist: Yup.string().required('This Field is required'),
    addressLineTwoGroupTourist: Yup.string().required('This Field is required'),
    cityGroupTourist: Yup.string().required('This Field is required'),
    stateGroupTourist: Yup.string().required('This Field is required'),
    zipCodeGroupTourist: Yup.string().required('This Field is required'),
    countryGroupTourist: Yup.string().required('This Field is required'),
    addressInSrilankaGroupTourist: Yup.string().required(
      'This Field is required'
    ),
    emailGroupTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    alternateEmailGroupTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    telephoneGroupTourist: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Telephone number must be a valid 10-digit number'
      )
      .required('Telephone is required'),
    mobileGroupTourist: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
      .required('Mobile is required'),
    faxNumberGroupTourist: Yup.string().required('This Field is required'),
  }),
  initialValues: {
    whereHaveBeenGroupTourist: '',
    attendantArrivalDateGroupTourist: '',
    purposeOfVisitGroupTourist: '',
    visaValidPeriodGroupTourist: '',
    portOfDepartureGroupTourist: '',
    ArilineVesselGroupTourist: '',
    flightVesselNumberGroupTourist: '',
    addressLineOneGroupTourist: '',
    addressLineTwoGroupTourist: '',
    cityGroupTourist: '',
    stateGroupTourist: '',
    zipCodeGroupTourist: '',
    countryGroupTourist: '',
    addressInSrilankaGroupTourist: '',
    emailGroupTourist: '',
    alternateEmailGroupTourist: '',
    telephoneGroupTourist: '',
    mobileGroupTourist: '',
    faxNumberGroupTourist: '',
  },
  yupSchemaMember: Yup.object().shape({
    familyNameGroupTourist: Yup.string().required(' familyName is required'),
    givenNameGroupTourist: Yup.string().required(' GivenName is required'),
    titleGroupTourist: Yup.string().required(' Title is required'),
    dateOfBirthGroupTourist: Yup.string().required(
      ' Date Of Birth is required'
    ),
    genderGroupTourist: Yup.string().required(' Gender is required'),
    nationalityGroupTourist: Yup.string().required(' Nationality is required'),
    countryOfBirthGroupTourist: Yup.string().required(
      ' Country of birth is required'
    ),
    covidVaccinatedGroupTourist: Yup.string().required(
      'This Field is required'
    ),
    countryOfAddressGroupTourist: Yup.string().required(
      'This Field is required'
    ),
    occupationGroupTourist: Yup.string().required('Occupation is required'),
    passportNumberGroupTourist: Yup.string().required(
      'Passport Number  is required'
    ),
    issueDateGroupTourist: Yup.string().required('Issue Date  is required'),
    expiryDateGroupTourist: Yup.string().required('Expiry Date  is required'),
    passportImageGroupTourist: Yup.mixed()
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
      .required('Please select a file or enter a URL'),
    isChildInformationEnable: Yup.boolean().notRequired(),
    childInformation: Yup.array().of(
      Yup.object().shape({
        surnameFamilyName: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('Surname is required'),
          otherwise: schema => schema.notRequired(),
        }),
        otherGivenNames: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('otherGivenNames is required'),
          otherwise: schema => schema.notRequired(),
        }),
        dateOfBirth: Yup.date().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('date of birth is required'),
          otherwise: schema => schema.notRequired(),
        }),
        gender: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('gender is required'),
          otherwise: schema => schema.notRequired(),
        }),
        relationship: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('relationship is required'),
          otherwise: schema => schema.notRequired(),
        }),
      })
    ),
    validResidenceGroupTourist: Yup.string().notRequired(),
    validEtaOrExtensionGroupTourist: Yup.string().notRequired(),
    multipleEntryVisaGroupTourist: Yup.string().notRequired(),
  }),
  initialValuesMember: {
    familyNameGroupTourist: '',
    givenNameGroupTourist: '',
    titleGroupTourist: '',
    dateOfBirthGroupTourist: '',
    genderGroupTourist: '',
    nationalityGroupTourist: '',
    countryOfBirthGroupTourist: '',
    covidVaccinatedGroupTourist: '',
    countryOfAddressGroupTourist: '',
    occupationGroupTourist: '',
    passportNumberGroupTourist: '',
    issueDateGroupTourist: '',
    expiryDateGroupTourist: '',
    passportImageGroupTourist: '',
    isChildInformationEnable: false,
    childInformation: [
      {
        surnameFamilyName: '',
        otherGivenNames: '',
        dateOfBirth: '',
        gender: '',
        relationship: '',
      },
    ],
    validResidenceGroupTourist: '',
    validEtaOrExtensionGroupTourist: '',
    multipleEntryVisaGroupTourist: '',
  },
};

export const touristThirdPartySchema = {
  yupSchema: Yup.object().shape({
    whereHaveBeenThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    attendantArrivalDateThirdPartyTourist: Yup.date().required(
      'This Field is required'
    ),
    purposeOfVisitThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    visaValidPeriodThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    portOfDepartureThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    arilineVesselThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    flightVesselNumberThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    partyThirdPartyTourist: Yup.string().required('This Field is required'),
    familyNameTypeOfThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    givenNameTypeOfThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    addressLineOneThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    cityThirdPartyTourist: Yup.string().required('This Field is required'),
    stateThirdPartyTourist: Yup.string().required('This Field is required'),
    zipCodeThirdPartyTourist: Yup.string().required('This Field is required'),
    countryThirdPartyTourist: Yup.string().required('This Field is required'),
    addressInSrilankaThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    telephoneThirdPartyTourist: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Telephone number must be a valid 10-digit number'
      )
      .required('Required'),
    mobileThirdPartyTourist: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Telephone number must be a valid 10-digit number'
      )
      .required('Required'),
    faxNumberThirdPartyTourist: Yup.string().required('This Field is required'),
    emailThirdPartyTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    alternateEmailThirdPartyTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
  }),
  initialValues: {
    whereHaveBeenThirdPartyTourist: '',
    attendantArrivalDateThirdPartyTourist: '',
    purposeOfVisitThirdPartyTourist: '',
    visaValidPeriodThirdPartyTourist: '',
    portOfDepartureThirdPartyTourist: '',
    arilineVesselThirdPartyTourist: '',
    flightVesselNumberThirdPartyTourist: '',
    partyThirdPartyTourist: '',
    familyNameTypeOfThirdPartyTourist: '',
    givenNameTypeOfThirdPartyTourist: '',
    addressLineOneThirdPartyTourist: '',
    addressLineTwoThirdPartyTourist: '',
    cityThirdPartyTourist: '',
    stateThirdPartyTourist: '',
    zipCodeThirdPartyTourist: '',
    countryThirdPartyTourist: '',
    addressInSrilankaThirdPartyTourist: '',
    telephoneThirdPartyTourist: '',
    mobileThirdPartyTourist: '',
    faxNumberThirdPartyTourist: '',
    emailThirdPartyTourist: '',
    alternateEmailThirdPartyTourist: '',
  },

  yupSchemaMember: Yup.object().shape({
    familyNameThirdPartyTourist: Yup.string().required(
      ' familyName is required'
    ),
    givenNameThirdPartyTouristMember: Yup.string().required(
      ' GivenName is required'
    ),
    titleThirdPartyTourist: Yup.string().required(' Title is required'),
    dateOfBirthThirdPartyTourist: Yup.date().required(
      ' Date Of Birth is required'
    ),
    genderThirdPartyTourist: Yup.string().required(' Gender is required'),
    nationalityThirdPartyTourist: Yup.string().required(
      ' Nationality is required'
    ),
    countryOfBirthThirdPartyTourist: Yup.string().required(
      ' Country of birth is required'
    ),
    covidVaccinatedThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    countryOfAddressThirdPartyTourist: Yup.string().required(
      'This Field is required'
    ),
    occupationThirdPartyTourist: Yup.string().required(
      'Occupation is required'
    ),
    passportNumberThirdPartyTourist: Yup.string().required(
      'Passport Number  is required'
    ),
    issueDateThirdPartyTourist: Yup.date().required('Issue Date  is required'),
    expiryDateThirdPartyTourist: Yup.date().required(
      'Expiry Date  is required'
    ),
    passportImageThirdPartyTourist: Yup.string().notRequired(),

    isChildInformationEnable: Yup.boolean().notRequired(),
    childInformation: Yup.array().of(
      Yup.object().shape({
        surnameFamilyName: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('Surname is required'),
          otherwise: schema => schema.notRequired(),
        }),
        otherGivenNames: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('otherGivenNames is required'),
          otherwise: schema => schema.notRequired(),
        }),
        dateOfBirth: Yup.date().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('date of birth is required'),
          otherwise: schema => schema.notRequired(),
        }),
        gender: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('gender is required'),
          otherwise: schema => schema.notRequired(),
        }),
        relationship: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('relationship is required'),
          otherwise: schema => schema.notRequired(),
        }),
      })
    ),
    validResidenceThirdPartyTourist: Yup.string().notRequired(),
    validEtaOrExtensionThirdPartyTourist: Yup.string().notRequired(),
    multipleEntryVisaThirdPartyTourist: Yup.string().notRequired(),
  }),
  initialValuesMember: {
    familyNameThirdPartyTourist: '',
    givenNameThirdPartyTouristMember: '',
    titleThirdPartyTourist: '',
    dateOfBirthThirdPartyTourist: '',
    genderThirdPartyTourist: '',
    nationalityThirdPartyTourist: '',
    countryOfBirthThirdPartyTourist: '',
    covidVaccinatedThirdPartyTourist: '',
    countryOfAddressThirdPartyTourist: '',
    occupationThirdPartyTourist: '',
    passportNumberThirdPartyTourist: '',
    issueDateThirdPartyTourist: '',
    expiryDateThirdPartyTourist: '',
    passportImageThirdPartyTourist: '',
    isChildInformationEnable: false,
    childInformation: [
      {
        surnameFamilyName: '',
        otherGivenNames: '',
        dateOfBirth: '',
        gender: '',
        relationship: '',
      },
    ],
    validResidenceThirdPartyTourist: '',
    validEtaOrExtensionThirdPartyTourist: '',
    multipleEntryVisaThirdPartyTourist: '',
  },
};

export const businessIndividualsSchema = {
  initialValues: {
    familyNameBusinessIndividualTourist: '',
    givenNameBusinessIndividualTourist: '',
    titleBusinessIndividualTourist: '',
    dateOfBirthBusinessIndividualTourist: '',
    genderBusinessIndividualTourist: '',
    nationalityBusinessIndividualTourist: '',
    countryOfBirthBusinessIndividualTourist: '',
    covidVaccinatedBusinessIndividualTourist: '',
    occupationBusinessIndividualTourist: '',
    passportNumberBusinessIndividualTourist: '',
    isChildInformationEnable: false,
    childInformation: [
      {
        surnameFamilyName: '',
        otherGivenNames: '',
        dateOfBirth: '',
        gender: '',
        relationship: '',
      },
    ],
    issueDateBusinessIndividualTourist: '',
    expiryDateBusinessIndividualTourist: '',
    passportImageBusinessIndividualTourist: '',

    whereHaveBeenBusinessIndividualTourist: '',
    attendantArrivalDateBusinessIndividualTourist: '',
    purposeOfVisitBusinessIndividualTourist: '',

    purposeDescriptionBusinessIndividualTourist: '',
    portOfDepartureBusinessIndividualTourist: '',
    arilineVesselBusinessIndividualTourist: '',
    flightVesselNumberBusinessIndividualTourist: '',
    companyNameBusinessIndividualTourist: '',
    addressLineOneBusinessIndividualTourist: '',
    addressLineTwoBusinessIndividualTourist: '',
    cityBusinessIndividualTourist: '',
    stateBusinessIndividualTourist: '',
    zipCodeBusinessIndividualTourist: '',
    countryBusinessIndividualTourist: '',
    emailBusinessIndividualTourist: '',
    alternateEmailBusinessIndividualTourist: '',
    telephoneBusinessIndividualTourist: '',
    mobileBusinessIndividualTourist: '',
    faxNumberBusinessIndividualTourist: '',
    // Contact Details of the Sri Lankan Company
    companyNameBusinessIndividualTouristOfSrilankaCompany: '',
    addressLineOneBusinessIndividualTouristOfSrilankaCompany: '',
    addressLineTwoBusinessIndividualTouristOfSrilankaCompany: '',
    cityBusinessIndividualTouristOfSrilankaCompany: '',
    stateBusinessIndividualTouristOfSrilankaCompany: '',
    zipCodeBusinessIndividualTouristOfSrilankaCompany: '',
    emailBusinessIndividualTouristOfSrilankaCompany: '',
    telephoneBusinessIndividualTouristOfSrilankaCompany: '',
    mobileBusinessIndividualTouristOfSrilankaCompany: '',
    faxNumberBusinessIndividualTouristOfSrilankaCompany: '',
    validResidenceBusinessTourist: '',
    validEtaOrExtensionBusinessTourist: '',
    multipleEntryVisaBusinessTourist: '',
  },
  yupSchema: Yup.object().shape({
    familyNameBusinessIndividualTourist: Yup.string().required(
      ' familyName is required'
    ),
    givenNameBusinessIndividualTourist: Yup.string().required(
      ' GivenName is required'
    ),
    titleBusinessIndividualTourist: Yup.string().required(' Title is required'),
    dateOfBirthBusinessIndividualTourist: Yup.string().required(
      ' Date Of Birth is required'
    ),
    genderBusinessIndividualTourist: Yup.string().required(
      ' Gender is required'
    ),
    nationalityBusinessIndividualTourist: Yup.string().required(
      ' Nationality is required'
    ),
    countryOfBirthBusinessIndividualTourist: Yup.string().required(
      ' Nationality is required'
    ),
    covidVaccinatedBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    occupationBusinessIndividualTourist: Yup.string().required(
      'Occupation is required'
    ),
    passportNumberBusinessIndividualTourist: Yup.string().required(
      'Passport Number  is required'
    ),
    issueDateBusinessIndividualTourist: Yup.string().required(
      'Issue Date  is required'
    ),
    expiryDateBusinessIndividualTourist: Yup.string().required(
      'Expiry Date  is required'
    ),
    passportImageBusinessIndividualTourist: Yup.mixed()
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
      .required('Please select a file or enter a URL'),
    isChildInformationEnable: Yup.boolean().notRequired(),
    childInformation: Yup.array().of(
      Yup.object().shape({
        surnameFamilyName: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('Surname is required'),
          otherwise: schema => schema.notRequired(),
        }),
        otherGivenNames: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('otherGivenNames is required'),
          otherwise: schema => schema.notRequired(),
        }),
        dateOfBirth: Yup.date().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('date of birth is required'),
          otherwise: schema => schema.notRequired(),
        }),
        gender: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('gender is required'),
          otherwise: schema => schema.notRequired(),
        }),
        relationship: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('relationship is required'),
          otherwise: schema => schema.notRequired(),
        }),
      })
    ),
    whereHaveBeenBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    attendantArrivalDateBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    purposeOfVisitBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),

    purposeDescriptionBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    portOfDepartureBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    arilineVesselBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    flightVesselNumberBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    companyNameBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    addressLineOneBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    cityBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    stateBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    zipCodeBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    countryBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    emailBusinessIndividualTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    alternateEmailBusinessIndividualTourist: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),

    telephoneBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    mobileBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),
    faxNumberBusinessIndividualTourist: Yup.string().required(
      'This Field is required'
    ),

    //Contact Details of the Sri Lankan Company
    companyNameBusinessIndividualTouristOfSrilankaCompany:
      Yup.string().required('This Field is required'),
    addressLineOneBusinessIndividualTouristOfSrilankaCompany:
      Yup.string().required('This Field is required'),
    addressLineTwoBusinessIndividualTouristOfSrilankaCompany:
      Yup.string().required('This Field is required'),
    cityBusinessIndividualTouristOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    stateBusinessIndividualTouristOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    zipCodeBusinessIndividualTouristOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),

    emailBusinessIndividualTouristOfSrilankaCompany: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),

    telephoneBusinessIndividualTouristOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    mobileBusinessIndividualTouristOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    faxNumberBusinessIndividualTouristOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    validResidenceBusinessTourist: Yup.string().notRequired(),
    validEtaOrExtensionBusinessTourist: Yup.string().notRequired(),
    multipleEntryVisaBusinessTourist: Yup.string().notRequired(),
  }),
};

export const businessGroupSchema = {
  initialValues: {
    whereHaveBeenBusinessGroup: '',
    attendantArrivalDateBusinessGroup: '',
    purposeOfVisitBusinessGroup: '',
    purposeOfDescriptionBusinessGroup: '',
    portOfDepartureBusinessGroup: '',
    arilineVesselBusinessGroup: '',
    flightVesselNumberBusinessGroup: '',
    companyNameBusinessGroup: '',
    addressLineOneBusinessGroup: '',
    addressLineTwoBusinessGroup: '',
    cityBusinessGroup: '',
    stateBusinessGroup: '',
    zipCodeBusinessGroup: '',
    countryBusinessGroup: '',
    telephoneBusinessGroup: '',
    mobileBusinessGroup: '',
    faxNumberBusinessGroup: '',
    emailBusinessGroup: '',
    alternateEmailBusinessGroup: '',
    companyNameBusinessGroupOfSrilankaCompany: '',
    addressLineOneBusinessGroupOfSrilankaCompany: '',
    addressLineTwoBusinessGroupOfSrilankaCompany: '',
    cityBusinessGroupOfSrilankaCompany: '',
    stateBusinessGroupOfSrilankaCompany: '',
    zipCodeBusinessGroupOfSrilankaCompany: '',
    telephoneBusinessGroupOfSrilankaCompany: '',
    mobileBusinessGroupOfSrilankaCompany: '',
    faxNumberBusinessGroupOfSrilankaCompany: '',
    emailBusinessGroupOfSrilankaCompany: '',
  },
  yupSchema: Yup.object().shape({
    whereHaveBeenBusinessGroup: Yup.string().required('This Field is required'),
    attendantArrivalDateBusinessGroup: Yup.string().required(
      'This Field is required'
    ),
    purposeOfVisitBusinessGroup: Yup.string().required(
      'This Field is required'
    ),
    purposeOfDescriptionBusinessGroup: Yup.string().required(
      'This Field is required'
    ),
    portOfDepartureBusinessGroup: Yup.string().required(
      'This Field is required'
    ),
    arilineVesselBusinessGroup: Yup.string().required('This Field is required'),
    flightVesselNumberBusinessGroup: Yup.string().required(
      'This Field is required'
    ),
    companyNameBusinessGroup: Yup.string().required('This Field is required'),
    addressLineOneBusinessGroup: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoBusinessGroup: Yup.string().required(
      'This Field is required'
    ),
    cityBusinessGroup: Yup.string().required('This Field is required'),
    stateBusinessGroup: Yup.string().required('This Field is required'),
    zipCodeBusinessGroup: Yup.string().required('This Field is required'),
    countryBusinessGroup: Yup.string().required('This Field is required'),
    telephoneBusinessGroup: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Telephone number must be a valid 10-digit number'
      )
      .required('Required'),
    mobileBusinessGroup: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
      .required('Mobile Number is required'),
    faxNumberBusinessGroup: Yup.string().required('This Field is required'),

    emailBusinessGroup: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    alternateEmailBusinessGroup: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    companyNameBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),

    addressLineOneBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    cityBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    stateBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    zipCodeBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    telephoneBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    mobileBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    faxNumberBusinessGroupOfSrilankaCompany: Yup.string().required(
      'This Field is required'
    ),
    emailBusinessGroupOfSrilankaCompany: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
  }),
  initialValuesMember: {
    familyNameBusinessGroupMember: '',
    givenNameBusinessGroupMember: '',
    titleBusinessGroupMember: '',
    dateOfBirthBusinessGroupMember: '',
    genderBusinessGroupMember: '',
    nationalityBusinessGroupMember: '',
    countryOfBirthBusinessGroupMember: '',
    covidVaccinatedBusinessGroupMember: '',
    countryOfAddressBusinessGroupMember: '',
    occupationBusinessGroupMember: '',
    passportNumberBusinessGroupMember: '',
    issueDateBusinessGroupMember: '',
    expiryDateBusinessGroupMember: '',
    passportImageBusinessGroupMember: '',
    isChildInformationEnable: false,
    childInformation: [
      {
        surnameFamilyName: '',
        otherGivenNames: '',
        dateOfBirth: '',
        gender: '',
        relationship: '',
      },
    ],
    validResidenceBusinessGroupMember: '',
    validEtaOrExtensionBusinessGroupMember: '',
    multipleEntryVisaBusinessGroupMember: '',
  },
  yupSchemaMember: Yup.object().shape({
    familyNameBusinessGroupMember: Yup.string().required(
      ' familyName is required'
    ),
    givenNameBusinessGroupMember: Yup.string().required(
      ' GivenName is required'
    ),
    titleBusinessGroupMember: Yup.string().required(' Title is required'),
    dateOfBirthBusinessGroupMember: Yup.string().required(
      ' Date Of Birth is required'
    ),
    genderBusinessGroupMember: Yup.string().required(' Gender is required'),
    nationalityBusinessGroupMember: Yup.string().required(
      ' Nationality is required'
    ),
    countryOfBirthBusinessGroupMember: Yup.string().required(
      ' Country of birth is required'
    ),
    covidVaccinatedBusinessGroupMember: Yup.string().required(
      'This Field is required'
    ),
    countryOfAddressBusinessGroupMember: Yup.string().required(
      'This Field is required'
    ),
    occupationBusinessGroupMember: Yup.string().required(
      'Occupation is required'
    ),
    passportNumberBusinessGroupMember: Yup.string().required(
      'Passport Number  is required'
    ),
    issueDateBusinessGroupMember: Yup.string().required(
      'Issue Date  is required'
    ),
    expiryDateBusinessGroupMember: Yup.string().required(
      'Expiry Date  is required'
    ),
    passportImageBusinessGroupMember: Yup.mixed()
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
      .required('Please select a file or enter a URL'),
    isChildInformationEnable: Yup.boolean().notRequired(),
    childInformation: Yup.array().of(
      Yup.object().shape({
        surnameFamilyName: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('Surname is required'),
          otherwise: schema => schema.notRequired(),
        }),
        otherGivenNames: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('otherGivenNames is required'),
          otherwise: schema => schema.notRequired(),
        }),
        dateOfBirth: Yup.date().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('date of birth is required'),
          otherwise: schema => schema.notRequired(),
        }),
        gender: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('gender is required'),
          otherwise: schema => schema.notRequired(),
        }),
        relationship: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('relationship is required'),
          otherwise: schema => schema.notRequired(),
        }),
      })
    ),
    validResidenceBusinessGroupMember: Yup.string().notRequired(),
    validEtaOrExtensionBusinessGroupMember: Yup.string().notRequired(),
    multipleEntryVisaBusinessGroupMember: Yup.string().notRequired(),
  }),
};

export const businessThirdPartySchema = {
  yupSchema: Yup.object().shape({
    whereHaveBeenThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    attendantArrivalDateThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    purposeOfVisitThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    PurposeDescriptionThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    portOfDepartureThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    ArilineVesselThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    flightVesselNumberThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),

    companyNameApplicantThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    addressLineOneApplicantThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoApplicantThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    cityApplicantThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    stateApplicantThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    zipCodeApplicantThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    countryApplicantThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    emailApplicantThirdPartyBusiness: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    alternateEmailApplicantThirdPartyBusiness: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    telephoneApplicantThirdPartyBusiness: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Telephone number must be a valid 10-digit number'
      )
      .required('Telephone is required'),
    mobileApplicantThirdPartyBusiness: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
      .required('Mobile is required'),
    faxNumberApplicantThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),

    companyNameSriLankanThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    addressLineOneSriLankanThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoSriLankanThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    citySriLankanThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    stateSriLankanThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    zipCodeSriLankanThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    countrySriLankanThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    emailSriLankanThirdPartyBusiness: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    telephoneSriLankanThirdPartyBusiness: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Telephone number must be a valid 10-digit number'
      )
      .required('Telephone is required'),
    mobileSriLankanThirdPartyBusiness: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be a valid 10-digit number')
      .required('Mobile is required'),
    faxNumberSriLankanThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),

    partyTypeThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    familyNameTypeOfThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    givenNameTypeOfThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    addressLineOneThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    addressLineTwoThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    cityThirdPartyBusiness: Yup.string().required('This Field is required'),
    stateThirdPartyBusiness: Yup.string().required('This Field is required'),
    zipCodeThirdPartyBusiness: Yup.string().required('This Field is required'),
    countryThirdPartyBusiness: Yup.string().required('This Field is required'),
    telephoneThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    mobileThirdPartyBusiness: Yup.string().required('This Field is required'),
    faxNumberThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    emailThirdPartyBusiness: Yup.string().required('This Field is required'),
    alternateEmailThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
  }),
  initialValues: {
    whereHaveBeenThirdPartyBusiness: '',
    attendantArrivalDateThirdPartyBusiness: '',
    purposeOfVisitThirdPartyBusiness: '',
    PurposeDescriptionThirdPartyBusiness: '',
    portOfDepartureThirdPartyBusiness: '',
    ArilineVesselThirdPartyBusiness: '',
    flightVesselNumberThirdPartyBusiness: '',

    companyNameApplicantThirdPartyBusiness: '',
    addressLineOneApplicantThirdPartyBusiness: '',
    addressLineTwoApplicantThirdPartyBusiness: '',
    cityApplicantThirdPartyBusiness: '',
    stateApplicantThirdPartyBusiness: '',
    zipCodeApplicantThirdPartyBusiness: '',
    countryApplicantThirdPartyBusiness: '',
    emailApplicantThirdPartyBusiness: '',
    alternateEmailApplicantThirdPartyBusiness: '',
    telephoneApplicantThirdPartyBusiness: '',
    mobileApplicantThirdPartyBusiness: '',
    faxNumberApplicantThirdPartyBusiness: '',

    companyNameSriLankanThirdPartyBusiness: '',
    addressLineOneSriLankanThirdPartyBusiness: '',
    addressLineTwoSriLankanThirdPartyBusiness: '',
    citySriLankanThirdPartyBusiness: '',
    stateSriLankanThirdPartyBusiness: '',
    zipCodeSriLankanThirdPartyBusiness: '',
    countrySriLankanThirdPartyBusiness: '',
    emailSriLankanThirdPartyBusiness: '',
    telephoneSriLankanThirdPartyBusiness: '',
    mobileSriLankanThirdPartyBusiness: '',
    faxNumberSriLankanThirdPartyBusiness: '',

    partyTypeThirdPartyBusiness: '',
    familyNameTypeOfThirdPartyBusiness: '',
    givenNameTypeOfThirdPartyBusiness: '',
    addressLineOneThirdPartyBusiness: '',
    addressLineTwoThirdPartyBusiness: '',
    cityThirdPartyBusiness: '',
    stateThirdPartyBusiness: '',
    zipCodeThirdPartyBusiness: '',
    countryThirdPartyBusiness: '',
    telephoneThirdPartyBusiness: '',
    mobileThirdPartyBusiness: '',
    faxNumberThirdPartyBusiness: '',
    emailThirdPartyBusiness: '',
    alternateEmailThirdPartyBusiness: '',
  },

  yupSchemaMemberBusiness: Yup.object().shape({
    familyNameThirdPartyBusiness: Yup.string().required(
      ' familyName is required'
    ),
    givenNameThirdPartyBusiness: Yup.string().required(
      ' GivenName is required'
    ),
    titleThirdPartyBusiness: Yup.string().required(' Title is required'),
    dateOfBirthThirdPartyBusiness: Yup.string().required(
      ' Date Of Birth is required'
    ),
    genderThirdPartyBusiness: Yup.string().required(' Gender is required'),
    nationalityThirdPartyBusiness: Yup.string().required(
      ' Nationality is required'
    ),
    countryOfBirthThirdPartyBusiness: Yup.string().required(
      ' Country of birth is required'
    ),
    covidVaccinatedThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    countryOfAddressThirdPartyBusiness: Yup.string().required(
      'This Field is required'
    ),
    occupationThirdPartyBusiness: Yup.string().required(
      'Occupation is required'
    ),
    passportNumberThirdPartyBusiness: Yup.string().required(
      'Passport Number  is required'
    ),
    issueDateThirdPartyBusiness: Yup.string().required(
      'Issue Date  is required'
    ),
    expiryDateThirdPartyBusiness: Yup.string().required(
      'Expiry Date  is required'
    ),
    passportImageThirdPartyBusiness: Yup.string().notRequired(),
    isChildInformationEnable: Yup.boolean().notRequired(),
    childInformation: Yup.array().of(
      Yup.object().shape({
        surnameFamilyName: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('Surname is required'),
          otherwise: schema => schema.notRequired(),
        }),
        otherGivenNames: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('otherGivenNames is required'),
          otherwise: schema => schema.notRequired(),
        }),
        dateOfBirth: Yup.date().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('date of birth is required'),
          otherwise: schema => schema.notRequired(),
        }),
        gender: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('gender is required'),
          otherwise: schema => schema.notRequired(),
        }),
        relationship: Yup.string().when('isChildInformationEnable', {
          is: true,
          then: schema => schema.required('relationship is required'),
          otherwise: schema => schema.notRequired(),
        }),
      })
    ),
    validResidenceThirdPartyBusiness: Yup.string().notRequired(),
    validEtaOrExtensionThirdPartyBusiness: Yup.string().notRequired(),
    multipleEntryVisaThirdPartyBusiness: Yup.string().notRequired(),
  }),

  initialValuesMemberBusiness: {
    familyNameThirdPartyBusiness: '',
    givenNameThirdPartyBusiness: '',
    titleThirdPartyBusiness: '',
    dateOfBirthThirdPartyBusiness: '',
    genderThirdPartyBusiness: '',
    nationalityThirdPartyBusiness: '',
    countryOfBirthThirdPartyBusiness: '',
    covidVaccinatedThirdPartyBusiness: '',
    countryOfAddressThirdPartyBusiness: '',
    occupationThirdPartyBusiness: '',
    passportNumberThirdPartyBusiness: '',
    issueDateThirdPartyBusiness: '',
    expiryDateThirdPartyBusiness: '',
    passportImageThirdPartyBusiness: '',
    isChildInformationEnable: false,
    childInformation: [
      {
        surnameFamilyName: '',
        otherGivenNames: '',
        dateOfBirth: '',
        gender: '',
        relationship: '',
      },
    ],
    validResidenceThirdPartyBusiness: '',
    validEtaOrExtensionThirdPartyBusiness: '',
    multipleEntryVisaThirdPartyBusiness: '',
  },
};

// data
export const applyIndividualRadioData = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceIndividualTourist',
    inputName: 'validResidenceIndividualTourist',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionIndividualTourist',
    inputName: 'validEtaOrExtensionIndividualTourist',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaIndividualTourist',
    inputName: 'multipleEntryVisaIndividualTourist',
  },
];

export const applyInGroupsData = {
  radioData: [
    {
      id: 1,
      question: 'Do you have a valid residence visa to Sri Lanka? *',
      name: 'validResidenceGroupTourist',
      inputName: 'validResidenceGroupTourist',
    },
    {
      id: 2,
      question:
        'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
      name: 'validEtaOrExtensionGroupTourist',
      inputName: 'validEtaOrExtensionGroupTourist',
    },
    {
      id: 3,
      question: ' Do you have a multiple entry visa to Sri Lanka?*',
      name: 'multipleEntryVisaGroupTourist',
      inputName: 'multipleEntryVisaGroupTourist',
    },
  ],

  tableHead: [
    'Given Name',
    'Passport No.',
    'Nationality',
    'Date of Birth',
    'Passport Issued Date',
    'Gender',
    '',
  ],
  tableRows: [
    {
      name: 'John Michael',
      number: '123456789',
      nationality: 'ALBANIA',
      dateOfBirth: '05-10-1997',
      gender: 'FEMALE',
      passportIssuedDate: '23/04/18',
    },
    {
      name: 'Alexa Liras',
      number: '123456789',
      nationality: 'ALBANIA',
      dateOfBirth: '05-10-1997',
      gender: 'FEMALE',
      passportIssuedDate: '23/04/18',
    },
  ],
};

// third party
export const applyInThirdPartyMemberData = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceThirdPartyTourist',
    inputName: 'validResidenceThirdPartyTourist',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionThirdPartyTourist',
    inputName: 'validEtaOrExtensionThirdPartyTourist',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaThirdPartyTourist',
    inputName: 'multipleEntryVisaThirdPartyTourist',
  },
];

// business apply individual
export const businessIndividualRadio = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceBusinessTourist',
    inputName: 'validResidenceBusinessTourist',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionBusinessTourist',
    inputName: 'validEtaOrExtensionBusinessTourist',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaBusinessTourist',
    inputName: 'multipleEntryVisaBusinessTourist',
  },
];

// business groups
export const businessGroupsRadio = [
  {
    id: 1,
    question: 'Do you have a valid residence visa to Sri Lanka? *',
    name: 'validResidenceBusinessGroupMember',
    inputName: 'validResidenceBusinessGroupMember',
  },
  {
    id: 2,
    question:
      'Are you currently in Sri Lanka with a valid ETA or obtained an extension of visa?*',
    name: 'validEtaOrExtensionBusinessGroupMember',
    inputName: 'validEtaOrExtensionBusinessGroupMember',
  },
  {
    id: 3,
    question: ' Do you have a multiple entry visa to Sri Lanka?*',
    name: 'multipleEntryVisaBusinessGroupMember',
    inputName: 'multipleEntryVisaBusinessGroupMember',
  },
];
