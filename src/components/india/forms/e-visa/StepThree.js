import React from 'react';

const StepThree = () => {
  return (
    <>
      <div className="max-w-3xl px-12 py-20 mx-auto">
        <h2 className="py-4 text-2xl font-bold text-center underline underline-offset-8">
          Third Step
        </h2>
        <form method="POST">
          <div className="mb-5">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="form-input"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="form-input"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="form-input"
            />
          </div>

          <div>
            <button className="formbtn">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StepThree;
