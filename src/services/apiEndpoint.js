const apiEndpoint = {
  // India endpoint
  EVISA_USER_LOGIN: '/visa/loginEvisaUser',
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

  // payment routes
  INDIA_VISA_PAYMENT: '/visa/indiaVisa',
};

export default apiEndpoint;
