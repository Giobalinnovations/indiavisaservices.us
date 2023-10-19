"use client";
import BannerPage from "@/components/common/BannerPage";
import React, { useState } from "react";
import Select from "react-select";

const StepThree = ({ step }) => {
    const [fullName, setFullName] = useState("");
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];
    return (
        <>
            <BannerPage heading="Applicant Detail Form" />
            <div className="container py-16">
                <div>
                    <div className="">
                        <h2 className="text-3xl font-semibold">Applicant's Address Details</h2>
                        <hr className="text-primary bg-primary w-36 h-1" />
                    </div>
                    <div className="text-primary font-semibold text-2xl pt-5">
                        Present Address
                    </div>
                    <div className=" grid grid-cols-12 gap-8">
                        <div className="col-span-8">
                            <div className="">
                                <form className="formMain">
                                    <div class="form-input-main-div">
                                        <label class="form-label">House No. Street*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Village/Town?City*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Country</label>
                                        <Select
                                            placeholder="Select Country"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">State/Province/District*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Postal/Zip Code*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Phone No.</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Mobile No.</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Email Address</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="w-full flex items-center space-x-3 font-medium py-2">
                                        <p>Click here for same address</p>
                                        <input type="checkbox" className="w-4 h-4" />
                                    </div>

                                    <div className="text-primary font-semibold text-2xl">
                                        Permanent Address
                                    </div>

                                    <div class="form-input-main-div">
                                        <label class="form-label">House No. Street*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Village/Town?City*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">State/Province/District*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
                            gagan
                        </div>
                    </div>
                </div>

                <div>
                    <div className="">
                        <h2 className="text-3xl font-semibold">Family Details</h2>
                        <hr className="text-primary bg-primary w-36 h-1" />
                    </div>
                    <div className="text-primary font-semibold text-2xl pt-5">
                        Father’s Details
                    </div>
                    <div className=" grid grid-cols-12 gap-8">
                        <div className="col-span-8">
                            <div className="">
                                <form className="formMain">
                                    <div class="form-input-main-div">
                                        <label class="form-label">Father’s Details</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Nationality/Region*</label>
                                        <Select
                                            placeholder="Select Nationality"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Previous Nationality/Region*</label>
                                        <Select
                                            placeholder="Select Nationality"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Place of birth</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Country</label>
                                        <Select
                                            placeholder="Select Country"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>


                                    <div className="text-primary font-semibold text-2xl">
                                        Mother’s Details
                                    </div>

                                    <div class="form-input-main-div">
                                        <label class="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div> <div class="form-input-main-div">
                                        <label class="form-label">Nationality/Region*</label>
                                        <Select
                                            placeholder="Select Nationality"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Previous Nationality/Region*</label>
                                        <Select
                                            placeholder="Select Nationality"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Place of birth</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Country</label>
                                        <Select
                                            placeholder="Select Country"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
                            gagan
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-primary font-semibold text-2xl pt-5">
                        Marital Status
                    </div>
                    <div className=" grid grid-cols-12 gap-8">
                        <div className="col-span-8">
                            <div className="">
                                <form className="formMain">
                                    <div class="form-input-main-div">
                                        <label class="form-label">Applicant’s Marital Status</label>
                                        <Select
                                            placeholder="Select Nationality"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>

                                    <div className="text-primary font-semibold text-2xl pt-5">
                                        Spouse’s Details
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>

                                    <div class="form-input-main-div">
                                        <label class="form-label">Nationality/Region*</label>
                                        <Select
                                            placeholder="Select Nationality"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Previous Nationality/Region*</label>
                                        <Select
                                            placeholder="Select Nationality"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Place of Birth</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Country/Region of birth</label>
                                        <Select
                                            placeholder="Select Country"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>

                                    <div className="flex items-start space-x-2 py-2">
                                        <label class=" font-semibold">
                                            Were your parents/Grandparents (paternal/maternal)
                                            Pakistan Nationals or belong to Pakistan held area.
                                        </label>

                                        <div className="space-x-4 flex">
                                            <div className="px-2 space-x-2">
                                                <input type="radio" id="yes" name="fav_language" />
                                                <label for="yes" class=" font-semibold">Yes</label>
                                            </div>
                                            <div className="px-2 space-x-2">
                                                <input type="radio" id="no" name="fav_language" />
                                                <label for="no" class=" font-semibold">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-input-main-div">
                                        <label class="form-label">If Yes, give details*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>


                                </form>
                            </div>
                        </div>
                        <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
                            gagan
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-primary font-semibold text-2xl pt-5">
                        Profession / Occupation Details of Applicant
                    </div>
                    <div className=" grid grid-cols-12 gap-8">
                        <div className="col-span-8">
                            <div className="">
                                <form className="formMain">
                                    <div class="form-input-main-div">
                                        <label class="form-label">Present Occupation*</label>
                                        <Select
                                            placeholder="Select Occupation"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Employer Name/Business*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Designation</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Address*</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Phone</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>

                                    <div class="form-input-main-div">
                                        <label class="form-label">Present Occupation, if any</label>
                                        <Select
                                            placeholder="Select Nationality"
                                            options={options}
                                            className="select-input"
                                        />
                                    </div>


                                    <div className="flex items-start space-x-2 py-2">
                                        <label class=" font-semibold">
                                            Are/were you in a Military?Semi-Military/Police
                                            /Security Organization?
                                        </label>

                                        <div className="space-x-4 flex">
                                            <div className="px-2 space-x-2">
                                                <input type="radio" id="yes" name="fav_language" />
                                                <label for="yes" class=" font-semibold">Yes</label>
                                            </div>
                                            <div className="px-2 space-x-2">
                                                <input type="radio" id="no" name="fav_language" />
                                                <label for="no" class=" font-semibold">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-input-main-div">
                                        <label class="form-label">Organization</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Designation</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Rank</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-input-main-div">
                                        <label class="form-label">Place of Posting</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            class="form-input"
                                        //   value={fullName}
                                        //   onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>


                                </form>
                            </div>
                        </div>
                        <div className="col-span-4 py-6 px-4 bg-primary/10 border-primary/60 border-2 rounded-xl">
                            gagan
                        </div>
                    </div>
                </div>

                <p className="font-semibold">Mandatory Fields*</p>

                <div className="text-center space-x-4">
                    <button class="formbtnBorder">Back</button>
                    <button class="formbtn">Continue</button>
                </div>
            </div>
        </>
    );
};

export default StepThree;
