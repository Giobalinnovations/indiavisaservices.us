const apiEndpoint = {
  // India endpoint
  EVISA_USER_LOGIN: '/visa/services-travel-india/loginEvisaUser',
  VISA_ADD_STEP1: '/visa/services-travel-india/add/step-one',
  UPDATE_VISA_ADD_STEP1: '/visa/services-travel-india/viewVisaRequestForm',
  UPDATE_VISA_ADD_STEP1_LAST_EXIT_STEP_URL:
    '/visa/services-travel-india/viewVisaRequestFormLastExitStepUrl',

  UPDATE_VISA_FORM_PAYMENT:
    '/visa/services-travel-india/viewVisaRequestFormPayment',

  GET_VISA_STEP1_BY_ID: '/visa/services-travel-india/viewVisaRequestForm/',
  VISA_ADD_STEP2: '/visa/services-travel-india/add/step-two',
  UPDATE_VISA_ADD_STEP2: '/visa/services-travel-india/viewVisaRequestForm2',
  GET_VISA_STEP2_BY_FORM_ID:
    '/visa/services-travel-india/viewVisaRequestForm2ByFormId/',
  VISA_ADD_STEP3: '/visa/services-travel-india/add/step-three',
  UPDATE_VISA_ADD_STEP3: '/visa/services-travel-india/viewVisaRequestForm3',
  VISA_ADD_STEP4: '/visa/services-travel-india/add/step-four',
  UPDATE_VISA_ADD_STEP4: '/visa/services-travel-india/viewVisaRequestForm4',
  VISA_ADD_STEP5: '/visa/services-travel-india/add/step-five',
  UPDATE_VISA_ADD_STEP5: '/visa/services-travel-india/viewVisaRequestForm5',
  VISA_ADD_STEP6: '/visa/services-travel-india/add/step-six',
  VISA_ADD_STEP8: '/visa/services-travel-india/add/step-eight',
  GET_VISA_STEP8_BY_FORM_ID:
    '/visa/services-travel-india/viewVisaRequestForm8ByFormId/',
  GET_ALL_STEPS_DATA: '/visa/services-travel-india/getAllStepData/',

  // temporary exit
  VISA_ADD_TEMPORARY_EXIT:
    '/visa/services-travel-india/visaLastTemporaryExitUrl',
  VISA_GET_TEMPORARY_EXIT_BY_FORM_ID:
    '/visa/services-travel-india/visaLastTemporaryExitUrl/',

  // payment routes
  INDIA_VISA_PAYMENT: '/visa/services-travel-india/indiaVisa',
};

export default apiEndpoint;
