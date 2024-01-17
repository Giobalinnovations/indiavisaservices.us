const apiEndpoint = {
  // Turkey endpoint

  TURKEY_VISA_APPLICATION: '/turkeyvisa/turkeyVisaApplication',
  TURKEY_VISA_APPLICATION_PAYMENT: '/turkeyvisa/turkeyVisaApplication/payment',

  // Australia endpoint

  AUSTRALIA_VISA_APPLICATION: '/australiavisa/australiaVisaApplication',
  AUSTRALIA_VISA_APPLICATION_PAYMENT:
    '/australiavisa/australiavisaApplication/payment',

  // India endpoint

  VISA_ADD_STEP1: '/visa/add/step-one',
  UPDATE_VISA_ADD_STEP1: '/visa/viewVisaRequestForm',
  UPDATE_VISA_ADD_STEP1_LAST_EXIT_STEP_URL:
    '/visa/viewVisaRequestFormLastExitStepUrl',

  UPDATE_VISA_FORM_PAYMENT: '/visa/viewVisaRequestFormPayment',

  GET_VISA_STEP1_BY_ID: '/visa/viewVisaRequestForm/',
  VISA_ADD_STEP2: '/visa/add/step-two',
  UPDATE_VISA_ADD_STEP2: '/visa/viewVisaRequestForm2',
  GET_VISA_STEP2_BY_FORM_ID: '/visa/viewVisaRequestForm2ByFormId/',
  VISA_ADD_STEP3: '/visa/add/step-three',
  UPDATE_VISA_ADD_STEP3: '/visa/viewVisaRequestForm3',
  VISA_ADD_STEP4: '/visa/add/step-four',
  UPDATE_VISA_ADD_STEP4: '/visa/viewVisaRequestForm4',
  VISA_ADD_STEP5: '/visa/add/step-five',
  UPDATE_VISA_ADD_STEP5: '/visa/viewVisaRequestForm5',
  VISA_ADD_STEP6: '/visa/add/step-six',
  VISA_ADD_STEP8: '/visa/add/step-eight',
  GET_VISA_STEP8_BY_FORM_ID: '/visa/viewVisaRequestForm8ByFormId/',
  GET_ALL_STEPS_DATA: '/visa/getAllStepData/',

  // temporary exit
  VISA_ADD_TEMPORARY_EXIT: '/visa/visaLastTemporaryExitUrl',
  VISA_GET_TEMPORARY_EXIT_BY_FORM_ID: '/visa/visaLastTemporaryExitUrl/',

  // Srilanka Endpoints

  SL_VISA_TOURIST_INDIVIDUAL: '/slvisa/touristIndividual',
  SL_VISA_TOURIST_GROUPS: '/slvisa/touristGroups',
  SL_VISA_TOURIST_GROUPS_MEMBERS: '/slvisa/touristGroupsMembers',

  SL_VISA_TOURIST_THIRD_PARTY: '/slvisa/touristThirdParty',
  SL_VISA_TOURIST_THIRD_PARTY_MEMBERS: '/slvisa/touristThirdPartyMembers',

  SL_VISA_BUSINESS_INDIVIDUAL: '/slvisa/businessIndividual',
  SL_VISA_BUSINESS_GROUPS: '/slvisa/businessGroups',
  SL_VISA_BUSINESS_GROUPS_MEMBERS: '/slvisa/businessGroupsMembers',

  SL_VISA_BUSINESS_THIRD_PARTY: '/slvisa/businessThirdParty',
  SL_VISA_BUSINESS_THIRD_PARTY_MEMBERS: '/slvisa/businessThirdPartyMembers',
  SL_VISA_BUSINESS_THIRD_PARTY_PAYMENT: '/slvisa/businessThirdPartyPayment',

  // thailand
  THAILAND_VISA_APPLICATION: '/thailandvisa/thailandVisaApplication',
  THAILAND_VISA_APPLICATION_PERSON:
    '/thailandvisa/thailandVisaApplicationPerson',

  // cambodia endpoints
  CAMBODIA_VISA_APPLICATION: '/cambodiavisa/cambodiaVisaApplication',

  // egypt endpoints
  EGYPT_VISA_APPLICATION: '/egyptvisa/egyptVisaApplication',
  EGYPT_VISA_APPLICATION_VISA_DETAIL: '/egyptvisa/egyptVisaDetail',

  // singapore
  SINGAPORE_VISA_APPLICATION: '/singaporevisa/singaporeVisaApplication',
  SINGAPORE_VISA_APPLICATION_PEOPLE:
    '/singaporevisa/singaporeVisaApplicationPeople',
  // malaysia
  MALAYSIA_VISA_APPLICATION: '/malaysiavisa/malaysiaVisaApplication',
  MALAYSIA_VISA_APPLICATION_PEOPLE:
    '/malaysiavisa/malaysiaVisaApplicationPeople',
  // oman
  OMAN_VISA_APPLICATION: '/omanvisa/omanVisaApplication',
  OMAN_VISA_APPLICATION_PEOPLE: '/omanvisa/omanVisaApplicationPeople',
  // indonesia
  INDONESIA_VISA_APPLICATION: '/indonesiavisa/indonesiaVisaApplication',
  // japan
  JAPAN_VISA_APPLICATION: '/japanvisa/japanVisaApplication',
  JAPAN_VISA_APPLICATION_PEOPLE: '/japanvisa/japanVisaApplicationPeople',
  // morocco
  MOROCCO_VISA_APPLICATION: '/moroccovisa/moroccoVisaApplication',
  MOROCCO_VISA_APPLICATION_PEOPLE: '/moroccovisa/moroccoVisaApplicationPeople',

  // payment routes
  INDIA_VISA_PAYMENT: '/visa/indiaVisa',
};

export default apiEndpoint;
