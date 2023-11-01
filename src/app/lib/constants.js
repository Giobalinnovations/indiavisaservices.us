import * as Yup from 'yup';

export const step1ValidationSchema = {
  yupSchema: Yup.object().shape({
    applicationType: Yup.string().required('Application type is required'),
    nationalityRegion: Yup.string().required('Select Country is required'),
    passportType: Yup.string().required('Passport Type is required'),
    portOfArrival: Yup.string().required('portOfArrival is required'),
    dateOfBirth: Yup.date().required('Date Of Birth is required'),
    emailId: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    reEmailId: Yup.string().oneOf([Yup.ref('emailId')], 'Email do not match'),
    contactNo: Yup.string()
      .required('Phone number is required')
      .matches(
        /^\+[1-9]\d{1,14}$/,
        'Invalid phone number format. Please use the international format.'
      ),

    visaService: Yup.string().required('Visa Service is required'),
    eTouristVisa: Yup.string().when('visaService', {
      is: 'eTOURIST VISA',
      then: schema => schema.required('required'),
      otherwise: schema => schema.default(''),
    }),
    eTouristVisa30Days: Yup.string().when('eTouristVisa', {
      is: 'visa30days',
      then: schema => schema.required('required'),
      otherwise: schema => schema.default(''),
    }),
    eTouristVisa1Year: Yup.string().when('eTouristVisa', {
      is: 'visa1Year',
      then: schema => schema.required('required'),
      otherwise: schema => schema.default(''),
    }),
    eTouristVisa5Years: Yup.string().when('eTouristVisa', {
      is: 'visa5Years',
      then: schema => schema.required('required'),
      otherwise: schema => schema.default(''),
    }),
    eMedicalVisa: Yup.string().when('visaService', {
      is: 'eMEDICAL VISA',
      then: schema => schema.required('required'),
      otherwise: schema => schema.default(''),
    }),
    eBusinessVisa: Yup.string().when('visaService', {
      is: 'eBUSINESS VISA',
      then: schema => schema.required('required'),
      otherwise: schema => schema.default(''),
    }),
    eConferenceVisa: Yup.string().when('visaService', {
      is: 'eCONFERENCE VISA',
      then: schema => schema.required('required'),
      otherwise: schema => schema.default(''),
    }),
    eMedicalAttendantVisa: Yup.string().when('visaService', {
      is: 'eMEDICAL ATTENDANT VISA',
      then: schema => schema.required('required'),
      otherwise: schema => schema.default(''),
    }),

    expectedDateOfArrival: Yup.date().required(
      'Expected Date of Arrival is required'
    ),
    captcha: Yup.string().required('Please enter the above text'),
    // instructionsAccepted: Yup.boolean().oneOf(
    //   [true],
    //   'You must agree to the instructions'
    // ),
  }),
  initialValues: {
    applicationType: '',
    nationalityRegion: '',
    passportType: '',
    portOfArrival: '',
    dateOfBirth: '',
    emailId: '',
    reEmailId: '',
    contactNo: '',

    visaService: '',
    eTouristVisa: '',
    eTouristVisa30Days: '',
    eTouristVisa1Year: '',
    eTouristVisa5Years: '',
    eMedicalVisa: '',
    eBusinessVisa: '',
    eConferenceVisa: '',
    eMedicalAttendantVisa: '',

    expectedDateOfArrival: '',
    captcha: '',
    // instructionsAccepted: false,
  },
};

export const step2ValidationSchema = {
  yupSchema: Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    changedName: Yup.boolean().optional(),
    gender: Yup.string().required('Gender is required'),
    dateOfBirth: Yup.date().required('Date Of Birth is required'),
    townCityOfBirth: Yup.string().required('Town/City of birth is required'),
    countryRegionOfBirth: Yup.string().required(
      'Country/Region of birth is required'
    ),
    citizenshipNationalID: Yup.string().required(
      'Citizenship/National ID no. is required'
    ),
    religion: Yup.string().required('Religion is required'),
    visibleIdentificationMarks: Yup.string().required(
      'Visible identification marks is required'
    ),
    educationalQualification: Yup.string().required(
      'Educational Qualification is required'
    ),
    nationalityRegion: Yup.string().required('Nationality/Region is required'),
    acquisitionType: Yup.string().required('Acquisition type is required'),

    // haveLivedInApplyingCountry: Yup.string().required(
    //   'Please select whether you have lived in the country where you are applying for a visa'
    // ),
    placeOfIssue: Yup.string().required('Place of Issue is required'),
    nationalityMentionedTherein: Yup.string().required(
      'Nationality mentioned therein is required'
    ),

    passportNumber: Yup.string().required('Passport Number is required'),
    placeOfIssuePassportIC: Yup.string().required(
      'Place of Issue (Passport/IC) is required'
    ),
    dateOfIssue: Yup.date().required('Date Of issue is required'),
    dateOfExpiry: Yup.date().required('Date Of expiry is required'),
    // anyOtherPassport: Yup.string().required(
    //   'Please select whether you hold another Passport/Identity Certificate (IC)'
    // ),
    countryOfIssue: Yup.string().required('Country of Issue is required'),
    passportICNumber: Yup.string().required('Passport/IC No. is required'),
    dateOfIssuePassportIC: Yup.date().required('Date Of issue is required'),
    passportNationalityMentionedTherein: Yup.string().required(
      'Nationality mentioned therein is required'
    ),
  }),
  initialValues: {
    firstName: '',
    lastName: '',
    changedName: false,
    gender: '',
    dateOfBirth: '',
    townCityOfBirth: '',
    countryRegionOfBirth: '',
    citizenshipNationalID: '',
    religion: '',
    visibleIdentificationMarks: '',
    educationalQualification: '',
    nationalityRegion: '',
    acquisitionType: '',
    placeOfIssue: '',
    nationalityMentionedTherein: '',
    // haveLivedInApplyingCountry: '',
    passportNumber: '',
    placeOfIssuePassportIC: '',
    dateOfIssue: '',
    dateOfExpiry: '',
    // anyOtherPassport: '',
    countryOfIssue: '',
    passportICNumber: '',
    dateOfIssuePassportIC: '',

    passportNationalityMentionedTherein: '',
  },
};

export const step3ValidationSchema = {
  yupSchema: Yup.object().shape({
    houseNoStreet: Yup.string().required('House No. Street is required'),
    villageTownCity: Yup.string().required('Village/Town/City is required'),
    country: Yup.string(),
    stateProvinceDistrict: Yup.string().required(
      'State/Province/District is required'
    ),
    postalZipCode: Yup.string().required('Postal/Zip Code is required'),
    phoneNo: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be a valid 10-digit number')
      .required('Phone is required'),
    mobileNo: Yup.string()
      .matches(
        /^[0-9]{10}$/, // You can adjust this regex pattern based on your phone number format
        'Phone number must be a valid 10-digit number'
      )
      .required('Phone is required'),
    emailAddress: Yup.string()
      .email('Invalid email address')
      .required('Email Address is required'),
    sameAddress: Yup.boolean(),
    permanentAddressHouseNoStreet: Yup.string().required(
      'House No. Street is required'
    ),
    permanentAddressVillageTownCity: Yup.string().required(
      'Village/Town/City is required'
    ),
    permanentAddressStateProvinceDistrict: Yup.string().required(
      'State/Province/District is required'
    ),

    fatherDetails: Yup.string(),
    fatherNationality: Yup.string().required(
      'Father Nationality/Region is required'
    ),
    fatherPreviousNationality: Yup.string().required(
      'Father Previous Nationality/Region is required'
    ),
    fatherPlaceOfBirth: Yup.string(),
    fatherCountry: Yup.string(),

    motherFullName: Yup.string().required('Mother Full Name is required'),
    motherNationality: Yup.string().required(
      'Mother Nationality/Region is required'
    ),
    motherPreviousNationality: Yup.string().required(
      'Mother Previous Nationality/Region is required'
    ),
    motherPlaceOfBirth: Yup.string(),
    motherCountry: Yup.string(),

    parentsPakistanNational: Yup.string().required('Please select an option'),
    parentDetails: Yup.string().when(
      'parentsPakistanNational',
      parentsPakistanNational => {
        if (parentsPakistanNational === 'no') {
          return Yup.string();
        } else {
          return Yup.string().required(
            'Please provide details if parents are Pakistan Nationals.'
          );
        }
      }
    ),

    applicantMaritalStatus: Yup.string().required(
      'Applicant’s Marital Status is required'
    ),
    spouseFullName: Yup.string().required("Spouse's Full Name is required"),
    spouseNationality: Yup.string().required(
      "Spouse's Nationality/Region is required"
    ),
    spousePreviousNationality: Yup.string().required(
      "Spouse's Previous Nationality/Region is required"
    ),
    spousePlaceOfBirth: Yup.string().required(
      "Spouse's Place of Birth is required"
    ),
    spouseCountryOfBirth: Yup.string().required(
      "Spouse's Country/Region of Birth is required"
    ),
    presentOccupation: Yup.string().required('Present Occupation is required'),
    employerName: Yup.string().required('Employer Name/Business is required'),
    designation: Yup.string(),
    address: Yup.string().required('Address is required'),
    phone: Yup.string()
      .matches(
        /^[0-9]{10}$/, // You can adjust this regex pattern based on your phone number format
        'Phone number must be a valid 10-digit number'
      )
      .required('Phone is required'),
    presentOccupationIfAny: Yup.string(),
    militaryOrganization: Yup.string().required('Please select an option'),
    organization: Yup.string(),
    militaryDesignation: Yup.string(),
    militaryRank: Yup.string(),
    placeOfPosting: Yup.string(),
  }),
  initialValues: {
    houseNoStreet: '',
    villageTownCity: '',
    country: '',
    stateProvinceDistrict: '',
    postalZipCode: '',
    phoneNo: '',
    mobileNo: '',
    emailAddress: '',
    sameAddress: false,
    permanentAddressHouseNoStreet: '',
    permanentAddressVillageTownCity: '',
    permanentAddressStateProvinceDistrict: '',
    fatherDetails: '',
    fatherNationality: '',
    fatherPreviousNationality: '',
    fatherPlaceOfBirth: '',
    fatherCountry: '',
    motherFullName: '',
    motherNationality: '',
    motherPreviousNationality: '',
    motherPlaceOfBirth: '',
    motherCountry: '',
    parentsPakistanNational: '', // 'yes' or 'no'
    parentDetails: '',
    applicantMaritalStatus: '',
    spouseFullName: '',
    spouseNationality: '',
    spousePreviousNationality: '',
    spousePlaceOfBirth: '',
    spouseCountryOfBirth: '',
    presentOccupation: '',
    employerName: '',
    designation: '',
    address: '',
    phone: '',
    presentOccupationIfAny: '',
    militaryOrganization: '',
    organization: '',
    militaryDesignation: '',
    militaryRank: '',
    placeOfPosting: '',
  },
};

export const step4ValidationSchema = {
  yupSchema: Yup.object().shape({
    visaType: Yup.string().required('Type of Visa is required'),
    visaType2: Yup.string().required('Type of Visa is required'),
    placesToVisit: Yup.string().required('Places to be visited is required'),
    placesToVisit2: Yup.string().required('Places to be visited is required'),
    roomBooked: Yup.string().required('Please select an option'),

    detailsOfFriendRelative: Yup.string().required(
      'Details of Friend/Relative is required'
    ),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('Please select an option'),
    district: Yup.string().required('Please select an option'),
    durationOfVisa: Yup.string().required('Duration of visa is required'),
    numberOfEntries: Yup.string(),
    portOfArrival: Yup.string().required(
      'Port of Arrival in India is required'
    ),
    expectedPortOfExit: Yup.string().required('Please select an option'),

    visitedIndiaBefore: Yup.string().required('Please select an option'),
    visaAddress: Yup.string().required('Address is required'),
    citiesVisitedInIndia: Yup.string().required(
      'Cities previously visited in India is required'
    ),
    lastIndianVisaNo: Yup.string().required(
      'Last Indian Visa no./Currently valid Indian Visa no. is required'
    ),
    typeOfVisa: Yup.string().required('Type of Visa is required'),
    placeOfIssue: Yup.string().required('Place of Issue is required'),
    dateOfIssue: Yup.date().required('Date Of issue is required'),

    permissionRefused: Yup.string(),
    refusalDetails: Yup.string().when(
      'permissionRefused',
      permissionRefused => {
        if (permissionRefused === 'no') {
          return Yup.string();
        } else {
          return Yup.string().required('field required');
        }
      }
    ),
    visitedSAARCCountries: Yup.string(),
    saarcCountryName: Yup.string().when(
      'visitedSAARCCountries',
      (visitedSAARCCountries, schema) => {
        if (visitedSAARCCountries === 'no') {
          return schema;
        } else {
          return schema.required('Please enter the name of the SAARC country');
        }
      }
    ),
    selectYear: Yup.string().when(
      'visitedSAARCCountries',
      (visitedSAARCCountries, schema) => {
        if (visitedSAARCCountries === 'no') {
          return schema;
        } else {
          return schema.required('Please select a year');
        }
      }
    ),

    numberOfVisits: Yup.string().when(
      'visitedSAARCCountries',
      (visitedSAARCCountries, schema) => {
        if (visitedSAARCCountries === 'no') {
          return schema;
        } else {
          return schema.required('Please enter a valid number');
        }
      }
    ),

    countriesVisited: Yup.string(),
    friendRelativeDetails: Yup.string().required(
      'Details of the Friend/Relative is required'
    ),
    friendRelativeAddress: Yup.string().required('Address is required'),
    friendRelativeState: Yup.string().required('State is required'),
    friendRelativeDistrict: Yup.string().required('District is required'),
    friendRelativePhone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be a valid 10-digit number')
      .required('Phone is required'),
    referenceNameInFrance: Yup.string().required(
      'Reference Name in France is required'
    ),
    referenceAddressInFrance: Yup.string().required(
      'Address in France is required'
    ),
    referenceFrancePhone: Yup.string()
      .matches(
        /^[0-9]{10}$/, // You can adjust this regex pattern based on your phone number format
        'Phone number must be a valid 10-digit number'
      )
      .required('Phone is required'),
  }),
  initialValues: {
    visaType: '',
    visaType2: '',
    placesToVisit: '',
    placesToVisit2: '',
    roomBooked: 'no',

    detailsOfFriendRelative: '',
    address: '',
    state: '',
    district: '',
    durationOfVisa: '',
    numberOfEntries: '',
    portOfArrival: '',
    expectedPortOfExit: '',

    visitedIndiaBefore: 'no',
    visaAddress: '',
    citiesVisitedInIndia: '',
    lastIndianVisaNo: '',
    typeOfVisa: '',
    placeOfIssue: '',
    dateOfIssue: '',
    permissionRefused: 'no',
    refusalDetails: '',

    visitedSAARCCountries: 'no',
    saarcCountryName: '',
    selectYear: '',
    numberOfVisits: '',

    countriesVisited: '',

    friendRelativeDetails: '',
    friendRelativeAddress: '',
    friendRelativeState: '',
    friendRelativeDistrict: '',
    friendRelativePhone: '',
    referenceNameInFrance: '',
    referenceAddressInFrance: '',
    referenceFrancePhone: '',
  },
};

export const step5ValidationSchema = {
  yupSchema: Yup.object().shape({
    haveYouBeenArrested: Yup.string().required('This field is required'),
    haveYouBeenRefusedEntry: Yup.string().required('This field is required'),
    haveYouBeenEngagedInTrafficking: Yup.string().required(
      'This field is required'
    ),
    haveYouBeenEngagedInCrime: Yup.string().required('This field is required'),
    haveYouExpressedViews: Yup.string().required('This field is required'),
    haveYouSoughtAsylum: Yup.string().required('This field is required'),
    declaration: Yup.boolean().oneOf(
      [true],
      'You must agree to the declaration'
    ),
  }),
  initialValues: {
    haveYouBeenArrested: '',
    haveYouBeenRefusedEntry: '',
    haveYouBeenEngagedInTrafficking: '',
    haveYouBeenEngagedInCrime: '',
    haveYouExpressedViews: '',
    haveYouSoughtAsylum: '',
    declaration: false,
  },
};

// step 5 data
export const step5data = [
  {
    id: 1,
    question:
      'Have you ever been arrested/ prosecuted/ convicted by Court of Law of any country?*',
    name: 'haveYouBeenArrested',
  },
  {
    id: 2,
    question:
      'Have you ever been refused entry / deported by any country including India?*',
    name: 'haveYouBeenRefusedEntry',
  },
  {
    id: 3,
    question:
      'Have you ever been engaged in Human trafficking/ Drug trafficking/ Child abuse/ Crime against women/ Economic offense/ Financial fraud?*',
    name: 'haveYouBeenEngagedInTrafficking',
  },
  {
    id: 4,
    question:
      'Have you ever been engaged in Cyber crime/ Terrorist activities / Sabotage/ Espionage/ Genocide/ Political Killing/ other act of violence?*',
    name: 'haveYouBeenEngagedInCrime',
  },
  {
    id: 5,
    question:
      'Have you ever by any means or medium, expressed views that justify or glorify terrorist violence or that may encourage others to terrorist acts or other serious criminal acts?*',
    name: 'haveYouExpressedViews',
  },
  {
    id: 6,
    question:
      'Have you sought asylum (political or otherwise) in any country?*',
    name: 'haveYouSoughtAsylum',
  },
];
