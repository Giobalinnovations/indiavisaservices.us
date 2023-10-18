"use client";
import React, { useState } from "react";

const StepOne = ({ step }) => {
  const [fullName, setFullName] = useState("");
  return (
    <>
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
          {/* <div class="mb-5">
            <label for="email" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="form-input"
            />
          </div>
          <div class="mb-5">
            <label for="subject" class="form-label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              class="form-input"
            />
          </div> */}

          <div>
            <button class="formbtn">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepOne;
