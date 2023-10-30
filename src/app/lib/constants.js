import * as Yup from 'yup';

export const step1ValidationSchema = {
  yupSchema: Yup.object().shape({
    nationalityRegion: Yup.string().required('Select Country is required'),
    passportType: Yup.string().required('Passport Type is required'),
    portOfArrival: Yup.string().required('portOfArrival is required'),
    dateOfBirth: Yup.date().required('Date Of Birth is required'),
    emailId: Yup.string()
      .email('Invalid email format')
      .required('Email ID is required'),
    visaService: Yup.string().required('Visa Service is required'),
    expectedDateOfArrival: Yup.date().required(
      'Expected Date of Arrival is required'
    ),
    captcha: Yup.string().required('Please enter the above text'),
    instructionsAgreed: Yup.boolean().oneOf(
      [true],
      'You must agree to the instructions'
    ),
  }),
  initialValues: {
    nationalityRegion: '',
    passportType: '',
    portOfArrival: '',
    dateOfBirth: '',
    emailId: '',
    visaService: '',
    expectedDateOfArrival: '',
    captcha: '',
    instructionsAgreed: false,
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
    country: Yup.string(), // You can define validation rules specific to the country Select component.
    stateProvinceDistrict: Yup.string().required(
      'State/Province/District is required'
    ),
    postalZipCode: Yup.string().required('Postal/Zip Code is required'),
    phoneNo: Yup.string(), // You can define validation rules for the phone number.
    mobileNo: Yup.string(), // You can define validation rules for the mobile number.
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
    parentDetails: Yup.string().when('parentsPakistanNational', {
      is: 'yes',
      then: Yup.string().required(
        'Please provide details if parents are Pakistan Nationals.'
      ),
    }),
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
    phone: Yup.string(),
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
    presentOccupation: '', // Unique key for Present Occupation
    employerName: '', // Unique key for Employer Name/Business
    designation: '', // Unique key for Designation
    address: '', // Unique key for Address
    phone: '', // Unique key for Phone
    presentOccupationIfAny: '', // Unique key for Present Occupation, if any
    militaryOrganization: '', // Unique key for Military Organization
    organization: '', // Unique key for Organization
    militaryDesignation: '', // Unique key for Military Designation
    militaryRank: '', // Unique key for Military Rank
    placeOfPosting: '', // Unique key for Place of Posting
  },
};
