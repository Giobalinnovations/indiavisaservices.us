"use client";
import StepOne from "@/components/forms/regular-visa-form/StepOne";
import StepThree from "@/components/forms/regular-visa-form/StepThree";
import StepTwo from "@/components/forms/regular-visa-form/StepTwo";
import React, { useState } from "react";

const page = () => {
  const showStep = () => {
    const [fullName, setFullName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bossName, setBossName] = useState("");
    const [step, setStep] = useState(1);
    const [showSubmitList, setShowSubmitList] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSubmitList(true);
      console.log("submitted data name:", fullName);
    };
    switch (step) {
      case 1:
        return (
          <div className="mx-auto py-20 max-w-3xl px-12">
            <h2 className="py-4 text-center font-bold text-2xl underline underline-offset-8">
              First Step
            </h2>
            <form method="POST">
              <div class="mb-5">
                <label for="name" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="name"
                  placeholder="Full Name"
                  class="form-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>fullname: {fullName}</div>

              <div>
                <button class="formbtn" onClick={() => setStep(2)}>
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="mx-auto py-20 max-w-3xl px-12">
            <h2 className="py-4 text-center font-bold text-2xl underline underline-offset-8">
              Second Step
            </h2>
            <form method="POST">
              <div class="mb-5">
                <label for="name" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  class="form-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>lastName: {lastName}</div>

              <div>
                <button class="formbtn" onClick={() => setStep(1)}>
                  Back
                </button>
                <button class="formbtn" onClick={() => setStep(3)}>
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="mx-auto py-20 max-w-3xl px-12">
            <h2 className="py-4 text-center font-bold text-2xl underline underline-offset-8">
              Third Step
            </h2>
            <form method="POST" onSubmit={handleSubmit}>
              <div class="mb-5">
                <label for="name" class="form-label">
                  Boss Name
                </label>
                <input
                  type="text"
                  name="bossName"
                  id="name"
                  placeholder="boss Name"
                  class="form-input"
                  value={bossName}
                  onChange={(e) => setBossName(e.target.value)}
                />
              </div>
              <div>fullname: {bossName}</div>

              <div>
                <button class="formbtn" onClick={() => setStep(2)}>
                  Back
                </button>
                <button type="submit" class="formbtn">
                  Submit
                </button>
              </div>
            </form>
            {/* data list  */}
            {showSubmitList ? (
              <div>
                <p>full name: {fullName}</p>
                <p>full name: {lastName}</p>
                <p>full name: {bossName}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        );
    }
  };
  return <div>{showStep(1)}</div>;
};

export default page;
