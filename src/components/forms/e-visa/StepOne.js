'use client';
import React, { useState } from 'react';
import Select from 'react-select';

const StepOne = ({ step }) => {
  const [fullName, setFullName] = useState('');
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <>
      {' '}
      <p className="font-semibold text-center">
        Note: For e-visa services to Afghan Nationals, they must select
        <span className="pl-2 pr-1 text-primary">AFGHANISTAN</span> nationality
      </p>
      <div className="max-w-4xl px-12 py-4 mx-auto">
        <form className="formMain">
          <div className="form-input-main-div">
            <label className="form-label">Nationality / Region*</label>
            <Select
              placeholder="Select Nationality"
              options={options}
              className="select-input"
            />
          </div>
          <div className="form-input-main-div">
            <label className="form-label">Passport Type*</label>
            <Select
              placeholder="Select Passport Type"
              options={options}
              className="select-input"
            />
          </div>
          <div className="form-input-main-div">
            <label className="form-label">Port of Arrival*</label>
            <Select
              placeholder="Select Port of Arrival"
              options={options}
              className="select-input"
            />
          </div>
          <div className="form-input-main-div">
            <label className="form-label">Date Of Birth</label>
            <input
              type="date"
              name="fullName"
              id="name"
              className="form-input"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </div>
          <div className="form-input-main-div">
            <label className="form-label">Email ID*</label>
            <input
              type="text"
              name="Email ID*"
              id="name"
              placeholder="Enter Email Id"
              className="form-input"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </div>
          <div className="form-input-main-div">
            <label className="form-label">Re Enter Email ID*</label>
            <input
              type="text"
              name="Email ID*"
              id="name"
              placeholder="Re-enter Email Id"
              className="form-input"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-input-main-div">
            <label className="form-label">Visa Service*</label>
          </div>
          <div className="form-input-main-div">
            <label className="form-label">Expected Date of Arrival</label>
            <input
              type="date"
              name="fullName"
              id="name"
              placeholder="Full Name"
              className="form-input"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-input-main-div">
            <span className="form-label"></span>
            <p className="px-4 py-2 bg-[#FFE6D3] text-2xl text-center rounded-lg w-36">
              t8Q53A
            </p>
          </div>
          <div className="form-input-main-div">
            <label className="form-label">Please enter above text*</label>
            <input
              type="text"
              name="fullName"
              id="name"
              className="form-input"
              // value={fullName}
              // onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" />
            <label className="text-xs">
              I have read the instructions ,I have all the required documents in
              scanned pdf format and photograph in jpg/jpeg format.
            </label>
          </div>
          <p className="text-sm font-medium whitespace-pre">
            While entering India, Covid related measures shall be applicable as
            per guidelines issued by Govt of India from time to time.
          </p>

          <div className="text-center">
            <button className="formbtn">Continue</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepOne;
